import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

// The site must keep working (with its built-in content) when Sanity
// is not configured, e.g. in local development before setup.
export const isSanityConfigured = Boolean(projectId)

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2026-11-01',
      // No CDN cache: published changes appear on the site immediately.
      // Traffic is low, so direct API reads are fine and always fresh.
      useCdn: false,
    })
  : null

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null

export function urlFor(source) {
  if (!builder || !source) return null
  return builder.image(source)
}
