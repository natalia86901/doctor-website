import { urlFor } from './sanity'

/**
 * Maps Sanity patientCase documents to the shape used by
 * PatientResultsSection (Homepage / Dental Implants). The slider is built
 * from the before/after pair in the browser; no combined image is needed.
 * Returns undefined when there is nothing to show, so callers can fall
 * back to the built-in content.
 */
export function mapSanityCases(docs) {
  if (!docs?.length) return undefined
  const mapped = docs
    .filter(Boolean)
    .map((doc, index) => ({
      id: index + 1,
      beforeImage: urlFor(doc.beforeImage)?.width(1600).url(),
      afterImage: urlFor(doc.afterImage)?.width(1600).url(),
      quote: doc.quote,
      attribution: doc.attribution,
    }))
    .filter((item) => item.beforeImage && item.afterImage)
  return mapped.length ? mapped : undefined
}

/**
 * Maps Sanity patientCase documents for the Smile Gallery page, which uses
 * separate before/after images (no combined comparison image required).
 */
export function mapGalleryCases(docs) {
  if (!docs?.length) return undefined
  const mapped = docs
    .filter(Boolean)
    .map((doc, index) => ({
      id: index + 1,
      beforeImage: urlFor(doc.beforeImage)?.width(1600).auto('format').url(),
      afterImage: urlFor(doc.afterImage)?.width(1600).auto('format').url(),
      quote: doc.quote,
    }))
    .filter((item) => item.beforeImage && item.afterImage)
  return mapped.length ? mapped : undefined
}
