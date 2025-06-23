import InfoWrapper from '../InfoWrapper'

export default function Trie() {
  const pseudocode = `insertTrie(root, word):
  node = root
  for char in word:
    if char not in node.children:
      node.children[char] = new TrieNode()
    node = node.children[char]
  node.isEndOfWord = true`

  return (
    <InfoWrapper
      description="A Trie, or prefix tree, is a tree-like data structure used to efficiently store and retrieve keys in a dataset of strings. Each node represents a character of a key. Searching, insertion, and prefix matching can be done in O(m) time, where m is the length of the key."
      steps={[
        'Start from the root node.',
        'For each character in the word:',
        '  - If the character node does not exist, create it.',
        '  - Move to the child node corresponding to the character.',
        'Mark the last node as the end of the word.'
      ]}
      pseudocode={pseudocode}
      complexity={['O(m), m = length of the word', 'O(m)']}
    />
  )
}
