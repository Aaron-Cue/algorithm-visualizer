import React from 'react'
import AlgorithmWrapperPage from '@/components/Algorithms/AlgorithmWrapperPage'
import AnimationWrapper from '@/components/Algorithms/AnimationWrapper'
import MergeInfo from '@/components/Algorithms/Info/Sorting/Merge'


export default function page() {
  return (
    <AlgorithmWrapperPage title={'Merge Sort'} info={<MergeInfo />}>
      <AnimationWrapper algorithmType='merge' />
    </AlgorithmWrapperPage>
  )
}