import InfoWrapper from '../InfoWrapper'

export default function Avl() {
  const pseudocode = `insertAVL(node, value):
  if node is null:
    return new Node(value)
  
  if value < node.value:
    node.left = insertAVL(node.left, value)
  else:
    node.right = insertAVL(node.right, value)

  updateHeight(node)
  balanceFactor = getBalance(node)

  if balanceFactor > 1 and value < node.left.value:
    return rightRotate(node)

  if balanceFactor < -1 and value > node.right.value:
    return leftRotate(node)

  if balanceFactor > 1 and value > node.left.value:
    node.left = leftRotate(node.left)
    return rightRotate(node)

  if balanceFactor < -1 and value < node.right.value:
    node.right = rightRotate(node.right)
    return leftRotate(node)

  return node`

  return (
    <InfoWrapper
      description="An AVL Tree is a self-balancing binary search tree where the difference between heights of left and right subtrees (balance factor) cannot be more than one for all nodes. Rotations are used to maintain balance after insertions and deletions, ensuring O(log n) height."
      steps={[
        'Insert the node as in a regular BST.',
        'Update the height of the ancestor nodes.',
        'Check the balance factor of each ancestor.',
        'If unbalanced, perform rotations to rebalance the tree.',
        'Possible rotations: right rotation, left rotation, left-right rotation, right-left rotation.'
      ]}
      pseudocode={pseudocode}
      complexity={['O(log n)', 'O(log n)']}
    />
  )
}
