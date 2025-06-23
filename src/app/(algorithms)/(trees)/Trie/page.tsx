import React from 'react'
import AlgorithmWrapperPage from '@/components/Algorithms/AlgorithmWrapperPage'
import AnimationTrie from '@/components/Algorithms/Animations/Trie'
import TrieInfo from '@/components/Algorithms/Info/Trees/Trie'

export default function page() {
  return (
    <AlgorithmWrapperPage title={'Trie'} info={<TrieInfo />}>
      <AnimationTrie />
    </AlgorithmWrapperPage>
  )
}
