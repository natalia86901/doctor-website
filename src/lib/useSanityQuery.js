import { useEffect, useState } from 'react'
import { isSanityConfigured, sanityClient } from './sanity'

/**
 * Fetches a GROQ query from Sanity.
 * Returns null while loading, if Sanity is not configured, or on error —
 * callers fall back to the built-in content in those cases.
 */
export function useSanityQuery(query, params) {
  const [data, setData] = useState(null)
  const paramsKey = JSON.stringify(params ?? null)

  useEffect(() => {
    if (!isSanityConfigured) return undefined
    let cancelled = false
    sanityClient
      .fetch(query, params ?? {})
      .then((result) => {
        if (!cancelled) setData(result)
      })
      .catch((error) => {
        console.error('Sanity fetch failed:', error)
      })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, paramsKey])

  return data
}
