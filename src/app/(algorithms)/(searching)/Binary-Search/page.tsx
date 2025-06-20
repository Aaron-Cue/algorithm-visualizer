import React from 'react'
import AlgorithmWrapperPage from '@/components/Algorithms/AlgorithmWrapperPage'
import AnimationSearchingWrapper from '@/components/Algorithms/Animations/AnimationSearchingWrapper'
import BinarySearchInfo from '@/components/Algorithms/Info/Searching/Binary'

export default function page() {
  return (
    <AlgorithmWrapperPage
      title={'Binary Searching'}
      info={<BinarySearchInfo />}
    >
      <AnimationSearchingWrapper algorithmType="binary" speed={1250} />
    </AlgorithmWrapperPage>
  )
}
