import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  deployment: {
    appId: 'f5n2cgco30r8clzgy8wik1f5',
  },
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
})
