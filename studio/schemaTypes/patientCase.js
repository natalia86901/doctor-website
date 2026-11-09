import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'patientCase',
  title: 'Patient Case',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Case Name (internal)',
      description: 'For admin reference only, e.g. "Patient 1 — Full Arch". Not shown on the website.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Patient Quote',
      description: 'Short quote shown under the before/after slider, e.g. "I can eat comfortably again."',
      type: 'string',
    }),
    defineField({
      name: 'attribution',
      title: 'Quote Attribution (optional)',
      description: 'Patient name or initials shown after the quote. Leave empty to hide.',
      type: 'string',
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      description: 'Accepted formats: JPG, PNG, WebP or HEIC (iPhone photos). Up to ~20 MB — the website resizes images automatically, but smaller files upload faster. Use the same framing for Before and After so the slider lines up.',
      type: 'image',
      options: { hotspot: true, accept: 'image/jpeg, image/png, image/webp, image/heic, image/heif' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image',
      description: 'Accepted formats: JPG, PNG, WebP or HEIC (iPhone photos). Up to ~20 MB — the website resizes images automatically, but smaller files upload faster. Use the same framing for Before and After so the slider lines up.',
      type: 'image',
      options: { hotspot: true, accept: 'image/jpeg, image/png, image/webp, image/heic, image/heif' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'showInGallery',
      title: 'Show in Smile Gallery',
      description: 'Show this case on the Smile Gallery page. Cases can still be selected for the Homepage or Dental Implants page even when this is off.',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      description: 'Lower numbers appear first in the Smile Gallery.',
      type: 'number',
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: 'Gallery order',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'quote',
      after: 'afterImage',
      before: 'beforeImage',
      showInGallery: 'showInGallery',
    },
    prepare: ({ title, subtitle, after, before, showInGallery }) => ({
      title: showInGallery ? `${title} · Gallery` : title,
      subtitle,
      media: after ?? before,
    }),
  },
})
