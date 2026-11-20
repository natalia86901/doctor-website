import { useCallback, useState } from 'react'
import { TrashIcon } from '@sanity/icons'
import { Box, Button, Dialog, Flex, Spinner, Stack, Text, useToast } from '@sanity/ui'
import { useClient, useDocumentOperation, useFormValue } from 'sanity'

// Friendly names for documents that may reference a patient case.
const REFERRER_TITLES = {
  homePage: 'Homepage',
  dentalImplantsPage: 'Dental Implants Page',
}

/**
 * Wraps the Patient Case form and adds a visible "Delete" (trash) button
 * at the top of the form, next to where Published/Draft badges appear.
 * The button checks references first: if the case is featured on a page,
 * it explains where instead of attempting a delete that would fail.
 * The standard Delete in the "..." menu keeps working as before.
 */
export function CaseInputWithDelete(props) {
  const rawId = useFormValue(['_id'])
  const caseTitle = useFormValue(['title'])
  const publishedId = typeof rawId === 'string' ? rawId.replace(/^drafts\./, '') : null

  const client = useClient({ apiVersion: '2026-11-01' })
  const toast = useToast()
  const { delete: deleteOp } = useDocumentOperation(publishedId || 'none', 'patientCase')

  const [dialogOpen, setDialogOpen] = useState(false)
  const [checking, setChecking] = useState(false)
  const [publishedRefs, setPublishedRefs] = useState([])
  const [draftRefs, setDraftRefs] = useState([])

  const openDialog = useCallback(async () => {
    setDialogOpen(true)
    setChecking(true)
    try {
      const docs = await client.fetch('*[references($id)]{_id, _type}', { id: publishedId })
      const toNames = (list) => [...new Set(list.map((d) => REFERRER_TITLES[d._type] || d._type))]
      setPublishedRefs(toNames(docs.filter((d) => !d._id.startsWith('drafts.'))))
      setDraftRefs(toNames(docs.filter((d) => d._id.startsWith('drafts.'))))
    } catch (err) {
      setPublishedRefs([])
      setDraftRefs([])
    } finally {
      setChecking(false)
    }
  }, [client, publishedId])

  const closeDialog = useCallback(() => setDialogOpen(false), [])

  const confirmDelete = useCallback(() => {
    deleteOp.execute()
    setDialogOpen(false)
    toast.push({ status: 'success', title: 'Case deleted' })
  }, [deleteOp, toast])

  // Only references from PUBLISHED documents block deletion (same as the
  // built-in Delete action). Draft-only references get a warning instead.
  const isBlocked = publishedRefs.length > 0
  const hasDraftRefs = draftRefs.length > 0

  return (
    <Stack space={4}>
      {publishedId && (
        <Flex justify="flex-end">
          <Button
            icon={TrashIcon}
            text="Delete"
            tone="critical"
            mode="ghost"
            fontSize={1}
            padding={2}
            onClick={openDialog}
          />
        </Flex>
      )}

      {props.renderDefault(props)}

      {dialogOpen && (
        <Dialog
          header="Delete this case?"
          id="case-delete-dialog"
          onClose={closeDialog}
          width={1}
          footer={
            <Box padding={3}>
              <Flex justify="flex-end" gap={2}>
                <Button text={isBlocked ? 'Close' : 'Cancel'} mode="ghost" onClick={closeDialog} />
                {!checking && !isBlocked && (
                  <Button text="Delete" tone="critical" onClick={confirmDelete} />
                )}
              </Flex>
            </Box>
          }
        >
          <Box padding={4}>
            {checking ? (
              <Flex align="center" gap={3}>
                <Spinner muted />
                <Text size={1} muted>Checking where this case is used…</Text>
              </Flex>
            ) : isBlocked ? (
              <Stack space={3}>
                <Text size={1}>
                  <strong>“{caseTitle || 'This case'}” cannot be deleted yet</strong> — it is
                  currently shown on: {publishedRefs.join(', ')}.
                </Text>
                <Text size={1} muted>
                  Open that page, remove or replace this case there, publish the page, and then
                  delete the case.
                </Text>
              </Stack>
            ) : (
              <Stack space={3}>
                <Text size={1}>
                  “{caseTitle || 'This case'}” will be permanently deleted from the Smile Gallery
                  library, including its published version. This cannot be undone from here.
                </Text>
                {hasDraftRefs && (
                  <Text size={1} muted>
                    Note: an unpublished draft of {draftRefs.join(', ')} still mentions this case.
                    After deleting, open that page and remove the empty slot before publishing.
                  </Text>
                )}
              </Stack>
            )}
          </Box>
        </Dialog>
      )}
    </Stack>
  )
}
