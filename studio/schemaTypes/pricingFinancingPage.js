import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pricingFinancingPage',
  title: 'Pricing & Financing Page',
  type: 'document',
  fields: [
    // --- New Patient Offer ---
    defineField({
      name: 'offer',
      title: 'New Patient Offer',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Offer Title', type: 'string', initialValue: 'All-on-4 Fixed Teeth' }),
        defineField({
          name: 'price',
          title: 'Price',
          description: 'Number only, e.g. 19000. Displayed as $19,000.',
          type: 'number',
          validation: (rule) => rule.required().positive(),
        }),
        defineField({ name: 'priceNote', title: 'Price Note', type: 'string', initialValue: 'per arch' }),
        defineField({
          name: 'includes',
          title: 'Your treatment includes',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    // --- Pricing Tables ---
    defineField({
      name: 'pricingTables',
      title: 'Pricing Tables',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'pricingTable',
          title: 'Pricing Table',
          fields: [
            defineField({ name: 'title', title: 'Table Title', type: 'string', validation: (rule) => rule.required() }),
            defineField({
              name: 'treatments',
              title: 'Treatments',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'treatment',
                  fields: [
                    defineField({ name: 'name', title: 'Treatment Name', type: 'string', validation: (rule) => rule.required() }),
                    defineField({
                      name: 'image',
                      title: 'Design Image',
                      description: 'Photo of the denture/implant design shown in the table. Accepted formats: JPG, PNG, WebP or HEIC (iPhone photos). Up to ~20 MB — the website resizes images automatically, but smaller files upload faster.',
                      type: 'image',
                      options: { hotspot: true, accept: 'image/jpeg, image/png, image/webp, image/heic, image/heif' },
                    }),
                    defineField({
                      name: 'imageAlt',
                      title: 'Image Description (for accessibility)',
                      type: 'string',
                    }),
                    defineField({
                      name: 'price',
                      title: 'Price / Price Range',
                      description: 'Free text, e.g. "$650–$1,100" or "$7,000–$15,000".',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                  ],
                  preview: { select: { title: 'name', subtitle: 'price', media: 'image' } },
                },
              ],
            }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),
    // --- Hero / descriptions ---
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Treatment Costs & Payment Options',
    }),
    defineField({
      name: 'heroParagraphs',
      title: 'Hero Description Paragraphs',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'consultationTitle',
      title: 'Consultation Section Title',
      type: 'string',
      initialValue: 'Know Your Options. Make Your Decision.',
    }),
    defineField({
      name: 'consultationText',
      title: 'Consultation Section Text',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Pricing & Financing Page' }),
  },
})
