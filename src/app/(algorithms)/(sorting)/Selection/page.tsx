import React from 'react'
import AlgorithmWrapperPage from '@/components/Algorithms/AlgorithmWrapperPage'
import AnimationWrapper from '@/components/Algorithms/Animations/AnimationSortingWrapper'
import SelectionInfo from '@/components/Algorithms/Info/Sorting/Selection'

export default function page() {
  return (
    <AlgorithmWrapperPage title={'Selection sort'} info={<SelectionInfo />}>
      <AnimationWrapper algorithmType="selection" />
    </AlgorithmWrapperPage>
  )
}
