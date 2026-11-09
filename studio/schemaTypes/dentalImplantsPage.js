import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dentalImplantsPage',
  title: 'Dental Implants Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      description: 'Photo shown in the hero section of the Dental Implants page. Use a high-resolution photo (at least 1600px wide). Accepted formats: JPG, PNG, WebP or HEIC (iPhone photos). Up to ~20 MB — the website resizes images automatically, but smaller files upload faster.',
      type: 'image',
      options: { hotspot: true, accept: 'image/jpeg, image/png, image/webp, image/heic, image/heif' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'selectedCases',
      title: 'Before & After — Selected Cases',
      description: 'Choose which Smile Gallery cases appear on the Dental Implants page. The layout is designed for 3 cases.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'patientCase' }] }],
      validation: (rule) => rule.max(3).unique(),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Dental Implants Page' }),
  },
})
