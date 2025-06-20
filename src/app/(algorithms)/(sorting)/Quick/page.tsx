import React from 'react'
import AlgorithmWrapperPage from '@/components/Algorithms/AlgorithmWrapperPage'
import AnimationWrapper from '@/components/Algorithms/Animations/AnimationSortingWrapper'
import QuickInfo from '@/components/Algorithms/Info/Sorting/Quick'

export default function page() {
  return (
    <AlgorithmWrapperPage title={'Quick Sort'} info={<QuickInfo />}>
      <AnimationWrapper algorithmType="quick" />
    </AlgorithmWrapperPage>
  )
}
