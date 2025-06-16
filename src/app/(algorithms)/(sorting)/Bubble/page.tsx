import React from 'react'
import AlgorithmWrapperPage from '@/components/Algorithms/AlgorithmWrapperPage'
import AnimationWrapper from '@/components/Algorithms/AnimationWrapper'
import BubbleInfo from '@/components/Algorithms/Info/Sorting/Bubble'


export default function page() {
  return (
    <AlgorithmWrapperPage title={'Bubble Sort'} info={<BubbleInfo />}>
      <AnimationWrapper algorithmType='bubble' />
    </AlgorithmWrapperPage>
  )
}
