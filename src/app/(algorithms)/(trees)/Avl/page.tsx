import React from 'react'
import AlgorithmWrapperPage from '@/components/Algorithms/AlgorithmWrapperPage'
import AnimationAvl from '@/components/Algorithms/Animations/Avl'
import AvlInfo from '@/components/Algorithms/Info/Trees/Avl'

export default function page() {
  return (
    <AlgorithmWrapperPage title={'Avl Tree'} info={<AvlInfo />}>
      <AnimationAvl />
    </AlgorithmWrapperPage>
  )
}
