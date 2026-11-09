const CASE_FIELDS = `
  _id,
  quote,
  attribution,
  beforeImage,
  afterImage
`

export const HOME_PAGE_QUERY = `*[_id == "homePage"][0]{
  heroImage,
  selectedCases[]->{${CASE_FIELDS}}
}`

export const DENTAL_IMPLANTS_PAGE_QUERY = `*[_id == "dentalImplantsPage"][0]{
  heroImage,
  selectedCases[]->{${CASE_FIELDS}}
}`

export const GALLERY_CASES_QUERY = `*[_type == "patientCase" && showInGallery == true] | order(sortOrder asc, _createdAt asc){${CASE_FIELDS}}`

export const PRICING_PAGE_QUERY = `*[_id == "pricingFinancingPage"][0]`
