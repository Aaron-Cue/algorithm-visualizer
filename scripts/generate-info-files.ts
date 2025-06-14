import fs from 'fs'
import path from 'path'

const baseAnimationsPath = 'src/components/Algorithms/Animations'
const baseInfoPath = 'src/components/Algorithms/Info'

function toComponentName(fileName: string) {
  const nameWithoutExt = path.basename(fileName, '.tsx')
  return nameWithoutExt
    .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
    .replace(/^\w/, c => c.toUpperCase())
}

function generateInfoComponent(fileName: string) {
  const componentName = toComponentName(fileName)
  const rawName = path.basename(fileName, '.tsx')

  return `export default function ${componentName}() {
  return (
    <div>${rawName} info</div>
  );`
}

function generateInfoFiles() {
  const categories = fs.readdirSync(baseAnimationsPath)

  categories.forEach(category => {
    const animCategoryPath = path.join(baseAnimationsPath, category)
    const infoCategoryPath = path.join(baseInfoPath, category)

    if (!fs.statSync(animCategoryPath).isDirectory()) return

    fs.mkdirSync(infoCategoryPath, { recursive: true })

    const files = fs
      .readdirSync(animCategoryPath)
      .filter(f => f.endsWith('.tsx'))

    files.forEach(file => {
      const infoFilePath = path.join(infoCategoryPath, file)
      if (!fs.existsSync(infoFilePath)) {
        const content = generateInfoComponent(file)
        fs.writeFileSync(infoFilePath, content, 'utf-8')
        console.log(`Created: ${infoFilePath}`)
      } else {
        console.log(`Already exists: ${infoFilePath}`)
      }
    })
  })
}

generateInfoFiles()