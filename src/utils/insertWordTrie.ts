import { TrieNode } from '@/types/algorithms'

export function insertWordTrie(word: string, nodes: TrieNode[]): TrieNode[] | null {
  if (!word) return null

  const verticalSpacing = 90

  const newNodes = [...nodes]
  let currentParent = 'root'
  let currentLevel = 1

  for (let i = 0; i < word.length; i++) {
    const letter = word[i]
    // Buscar si existe hijo con esa letra
    const existingNode = newNodes.find(
      n => n.parent === currentParent && n.label === letter
    )

    if (existingNode) {
      currentParent = existingNode.id
      currentLevel++
    } else {
      const siblings = newNodes.filter(n => n.parent === currentParent)
      const siblingIndex = siblings.length
      const parentNode = newNodes.find(n => n.id === currentParent)

      const maxSpacing = 160
      const minSpacing = 40
      const perNodeSpacing = Math.max(
        minSpacing,
        maxSpacing - currentLevel * 20
      )

      const x =
        (parentNode?.x ?? 200) +
        (siblingIndex - Math.floor(siblings.length / 2)) * perNodeSpacing

      const y = 50 + currentLevel * verticalSpacing
      const newNodeId = currentParent + letter + i

      newNodes.push({
        id: newNodeId,
        label: letter,
        x,
        y,
        parent: currentParent
      })
      currentParent = newNodeId
      currentLevel++
    }
  }

  return newNodes
}
