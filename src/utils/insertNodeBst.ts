import { Node } from '@/types/algorithms'
import { calculatePositionNode } from '@/utils/calculatePositionNode'

export function insertNodeBst(value: number, nodes: Node[]): Node[] | null {
  if (nodes.find(node => node.id === value)) {
    return null 
  }

  const newNodes = [...nodes]
  let parentIndex = 0
  let currentLevel = 0

  while (true) {
    const parentNode = newNodes[parentIndex]

    if (value < parentNode.id) {
      const leftChildIndex = newNodes.findIndex(
        node => node.parent === parentNode.id && node.x < parentNode.x
      )

      if (leftChildIndex === -1) {
        currentLevel = Math.floor((parentNode.y - 50) / 100) + 1
        const position = calculatePositionNode(
          parentNode.x,
          currentLevel,
          true,
          0
        )
        newNodes.push({
          id: value,
          x: position.x,
          y: position.y,
          parent: parentNode.id
        })
        break
      } else {
        parentIndex = leftChildIndex
      }
    } else {
      const rightChildIndex = newNodes.findIndex(
        node => node.parent === parentNode.id && node.x > parentNode.x
      )

      if (rightChildIndex === -1) {
        currentLevel = Math.floor((parentNode.y - 50) / 100) + 1
        const position = calculatePositionNode(
          parentNode.x,
          currentLevel,
          false,
          0
        )
        newNodes.push({
          id: value,
          x: position.x,
          y: position.y,
          parent: parentNode.id
        })
        break
      } else {
        parentIndex = rightChildIndex
      }
    }
  }

  return newNodes
}
