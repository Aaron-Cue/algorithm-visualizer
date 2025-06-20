import React from 'react'
import AlgorithmWrapperPage from '@/components/Algorithms/AlgorithmWrapperPage'
import AnimationSearchingWrapper from '@/components/Algorithms/Animations/AnimationSearchingWrapper'
import LinearSearchInfo from '@/components/Algorithms/Info/Searching/Linear'

export default function page() {
  return (
    <AlgorithmWrapperPage
      title={'Linear Searching'}
      info={<LinearSearchInfo />}
    >
      <AnimationSearchingWrapper typeAlgorithm="linear" />
    </AlgorithmWrapperPage>
  )
}
