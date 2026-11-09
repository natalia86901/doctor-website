import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      description: 'Large background image at the top of the homepage. Use a wide, high-resolution photo (at least 2400px wide). Accepted formats: JPG, PNG, WebP or HEIC (iPhone photos). Up to ~20 MB — the website resizes images automatically, but smaller files upload faster.',
      type: 'image',
      options: { hotspot: true, accept: 'image/jpeg, image/png, image/webp, image/heic, image/heif' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'selectedCases',
      title: 'Patient Results — Selected Cases',
      description: 'Choose which Smile Gallery cases appear in the "Real Patients. Meaningful Change" section. The layout shows exactly 3 cases.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'patientCase' }] }],
      validation: (rule) => [
        rule.required().min(3).error('The homepage must show 3 cases — add a case before publishing.'),
        rule.max(3).error('The homepage layout fits exactly 3 cases — remove one before publishing.'),
        rule.unique().error('The same case is selected twice.'),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Homepage' }),
  },
})
