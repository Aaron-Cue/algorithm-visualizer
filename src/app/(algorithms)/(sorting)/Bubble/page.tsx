import React from 'react'
import AlgorithmWrapperPage from '@/components/Algorithms/AlgorithmWrapperPage'
import BubbleAnimation from '@/components/Algorithms/Animations/Sorting/Bubble'
import BubbleInfo from '@/components/Algorithms/Info/Sorting/Bubble'

export default function page() {
  return (
    <AlgorithmWrapperPage title={'Bubble Sort'} info={<BubbleInfo />}>
      <BubbleAnimation />
    </AlgorithmWrapperPage>
  )
}