import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'MISSING_PROJECT_ID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

// Singleton document types: one instance each, no "create new" button
const singletonTypes = new Set(['homePage', 'dentalImplantsPage', 'pricingFinancingPage'])
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'BDI Website Admin',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Site Content')
          .items([
            S.listItem()
              .title('Smile Gallery — Patient Cases')
              .child(
                S.documentTypeList('patientCase').title('Patient Cases')
              ),
            S.divider(),
            S.listItem()
              .title('Homepage')
              .child(
                S.document().schemaType('homePage').documentId('homePage')
              ),
            S.listItem()
              .title('Dental Implants Page')
              .child(
                S.document()
                  .schemaType('dentalImplantsPage')
                  .documentId('dentalImplantsPage')
              ),
            S.listItem()
              .title('Pricing & Financing Page')
              .child(
                S.document()
                  .schemaType('pricingFinancingPage')
                  .documentId('pricingFinancingPage')
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    // Hide singletons from the global "create new document" menu
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // Restrict actions on singletons (no delete / duplicate)
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
