import React from 'react'
import AlgorithmWrapperPage from '@/components/Algorithms/AlgorithmWrapperPage'
import AnimationWrapper from '@/components/Algorithms/Animations/AnimationSortingWrapper'
import BucketInfo from '@/components/Algorithms/Info/Sorting/Bucket'

export default function page() {
  return (
    <AlgorithmWrapperPage title={'Bucket Sort'} info={<BucketInfo />}>
      <AnimationWrapper algorithmType="bucket" />
    </AlgorithmWrapperPage>
  )
}
