import React from 'react'
import AlgorithmWrapperPage from '@/components/Algorithms/AlgorithmWrapperPage'
import AnimationWrapper from '@/components/Algorithms/AnimationWrapper'
import InsertionInfo from '@/components/Algorithms/Info/Sorting/Insertion'


export default function page() {
  return (
    <AlgorithmWrapperPage title={'Insertion Sort'} info={<InsertionInfo />}>
      <AnimationWrapper algorithmType='insertion' />
    </AlgorithmWrapperPage>
  )
}