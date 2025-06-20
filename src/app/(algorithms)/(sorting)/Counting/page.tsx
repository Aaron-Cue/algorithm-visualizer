import React from 'react'
import AlgorithmWrapperPage from '@/components/Algorithms/AlgorithmWrapperPage'
import AnimationWrapper from '@/components/Algorithms/AnimationWrapper'
import CountingInfo from '@/components/Algorithms/Info/Sorting/Counting'


export default function page() {
  return (
    <AlgorithmWrapperPage title={'Counting Sort'} info={<CountingInfo />}>
      <AnimationWrapper algorithmType='counting' />
    </AlgorithmWrapperPage>
  )
}