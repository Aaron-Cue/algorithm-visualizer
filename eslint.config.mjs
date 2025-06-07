import importPlugin from 'eslint-plugin-import'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript']
  }),
  {
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImportsPlugin,
      'simple-import-sort': simpleImportSortPlugin
    },
    rules: {
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-cycle': 'error',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_'
        }
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^react', '^next', '^[a-z]', '^@', '^\\.']]
        }
      ],
      'simple-import-sort/exports': 'warn'
    }
  }
]

export default eslintConfig