import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemas/schema'
import deskStructure from './deskStructure'

export default defineConfig({
  name: 'Holios',
  title: 'Holios',

  projectId: 'hhvgd79v',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

