/**
 * One-time content migration: uploads the site's current images and creates
 * the initial Sanity documents so the website looks exactly as it does now.
 *
 * Usage (from the studio/ folder):
 *   SANITY_AUTH_TOKEN=<editor-token> node migrate/migrate.js
 *
 * Safe to re-run: documents are createOrReplace'd by fixed IDs.
 */
import { createClient } from '@sanity/client'
import { createReadStream } from 'node:fs'
import { basename, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const token = process.env.SANITY_AUTH_TOKEN
if (!token) {
  console.error('Missing SANITY_AUTH_TOKEN env variable (create an Editor token at sanity.io/manage → API → Tokens).')
  process.exit(1)
}

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'pvhsou26',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  apiVersion: '2026-11-01',
  token,
  useCdn: false,
})

const __dirname = dirname(fileURLToPath(import.meta.url))
const assets = (p) => resolve(__dirname, '../../src/assets', p)

async function uploadImage(path) {
  const asset = await client.assets.upload('image', createReadStream(path), {
    filename: basename(path),
  })
  console.log('  uploaded', basename(path))
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
}

const homeCases = [
  { num: 1, quote: 'I can eat comfortably again.' },
  { num: 2, quote: 'I feel like myself when I smile.' },
  { num: 3, quote: "Why didn't I do it sooner?" },
]

// The Smile Gallery page has its own six cases (different photos).
const galleryCases = [
  { num: 1, before: '1 1.PNG', after: '1 3F.PNG', quote: 'I can eat comfortably again.' },
  { num: 2, before: '4 2.PNG', after: '3.PNG', quote: 'I feel like myself when I smile.' },
  { num: 3, before: '4 5.PNG', after: '3 2.PNG', quote: 'Why didn\u2019t I do it sooner?' },
  { num: 4, before: '4 6.PNG', after: '3 4.PNG', quote: 'I can smile in photos again.' },
  { num: 5, before: '4 4.PNG', after: '3 5.PNG', quote: 'It has changed my life.' },
  { num: 6, before: '4 3.png', after: '3 3.png', quote: 'I finally feel confident again.' },
]

async function run() {
  console.log('Uploading homepage case images...')
  const caseDocs = []
  for (const { num, quote } of homeCases) {
    const [beforeImage, afterImage] = await Promise.all([
      uploadImage(assets(`patientResults/home-patient-${num}-before.webp`)),
      uploadImage(assets(`patientResults/home-patient-${num}-after.webp`)),
    ])
    caseDocs.push({
      _id: `patientCase-home-${num}`,
      _type: 'patientCase',
      title: `Homepage Patient ${num}`,
      quote,
      beforeImage,
      afterImage,
      // Homepage cases are not shown on the Smile Gallery page (it has its own six).
      showInGallery: false,
      sortOrder: 100 + num * 10,
    })
  }

  console.log('Uploading Smile Gallery case images (large files, be patient)...')
  const galleryDocs = []
  for (const { num, before, after, quote } of galleryCases) {
    const [beforeImage, afterImage] = await Promise.all([
      uploadImage(assets(`smileGallery/${before}`)),
      uploadImage(assets(`smileGallery/${after}`)),
    ])
    galleryDocs.push({
      _id: `patientCase-gallery-${num}`,
      _type: 'patientCase',
      title: `Gallery Patient ${num}`,
      quote,
      beforeImage,
      afterImage,
      showInGallery: true,
      sortOrder: num * 10,
    })
  }

  console.log('Uploading hero images...')
  const homeHero = await uploadImage(assets('home-hero-preview.png'))
  const implantsHero = await uploadImage(assets('dentalImplants/client-oct14/hero.png'))

  console.log('Uploading pricing images...')
  const [standard, custom, snapIn, allOn4] = await Promise.all([
    uploadImage(assets('pricingFinancing/standard-dentures-soft.png')),
    uploadImage(assets('pricingFinancing/custom-dentures-soft.png')),
    uploadImage(assets('pricingFinancing/snap-in.png')),
    uploadImage(assets('pricingFinancing/all-on-4.png')),
  ])

  console.log('Creating documents...')
  const tx = client.transaction()
  for (const doc of caseDocs) tx.createOrReplace(doc)
  for (const doc of galleryDocs) tx.createOrReplace(doc)

  tx.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    heroImage: homeHero,
    selectedCases: caseDocs.map((doc) => ({
      _type: 'reference',
      _ref: doc._id,
      _key: doc._id,
    })),
  })

  tx.createOrReplace({
    _id: 'dentalImplantsPage',
    _type: 'dentalImplantsPage',
    heroImage: implantsHero,
    // No cases selected initially — the page currently shows none.
    selectedCases: [],
  })

  tx.createOrReplace({
    _id: 'pricingFinancingPage',
    _type: 'pricingFinancingPage',
    heroTitle: 'Treatment Costs &\nPayment Options',
    heroParagraphs: [
      'Explore treatment pricing and options for paying over time.',
      'Your consultation will help determine the right treatment for you and the full cost of your care.',
    ],
    offer: {
      title: 'All-on-4 Fixed Teeth',
      price: 19000,
      priceNote: 'per arch',
      includes: ['Extractions', 'Implant placement', 'Sedation', 'Final fixed restoration'],
    },
    pricingTables: [
      {
        _type: 'pricingTable',
        _key: 'dentures',
        title: 'New Denture Patients',
        treatments: [
          { _type: 'treatment', _key: 'standard', name: 'Standard Dentures', image: standard, imageAlt: 'Standard upper and lower dentures', price: '$650–$1,100' },
          { _type: 'treatment', _key: 'custom', name: 'Customized Dentures', image: custom, imageAlt: 'Customized upper and lower dentures', price: '$1,500–$2,000' },
        ],
      },
      {
        _type: 'pricingTable',
        _key: 'implants',
        title: 'Implants',
        treatments: [
          { _type: 'treatment', _key: 'snap-in', name: 'Snap-In', image: snapIn, imageAlt: 'Removable snap-in denture with implant attachments', price: '$7,000–$15,000' },
          { _type: 'treatment', _key: 'all-on-4', name: 'All-on-4', image: allOn4, imageAlt: 'All-on-4 fixed teeth with four implant openings', price: '$15,000–$25,000' },
        ],
      },
    ],
    consultationTitle: 'Know Your Options.\nMake Your Decision.',
    consultationText: 'Meet with Dr. Tarkesh to discuss your needs, explore treatment options, and get a clear understanding of the costs before making any decisions.',
  })

  await tx.commit()
  console.log('Done! Open the studio and check Site Content.')
}

run().catch((error) => {
  console.error('Migration failed:', error.message)
  process.exit(1)
})
