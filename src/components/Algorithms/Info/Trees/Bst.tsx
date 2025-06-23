import InfoWrapper from '../InfoWrapper'

export default function Bst() {
  const pseudocode = `insertBST(node, value):
  if node is null:
    return new Node(value)
  if value < node.value:
    node.left = insertBST(node.left, value)
  else:
    node.right = insertBST(node.right, value)
  return node`

  return (
    <InfoWrapper
      description="A Binary Search Tree (BST) is a node-based binary tree data structure where each node has a comparable key (and associated value) and satisfies the property that the key in any node is greater than all keys in the node's left subtree and less than those in its right subtree. BSTs allow efficient searching, insertion, and deletion operations."
      steps={[
        'Start at the root node.',
        'Compare the value to be inserted with the current node’s value.',
        'If the value is less, move to the left child; if greater, move to the right child.',
        'Repeat this process until reaching a null position.',
        'Insert the new node at the null position.'
      ]}
      pseudocode={pseudocode}
      complexity={[
        'O(h) - average case (h = tree height)',
        'O(n) - worst case (unbalanced tree)'
      ]}
    />
  )
}
