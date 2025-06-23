import React from 'react'
import AlgorithmWrapperPage from '@/components/Algorithms/AlgorithmWrapperPage'
import AnimationBst from '@/components/Algorithms/Animations/Bst'
import BstInfo from '@/components/Algorithms/Info/Trees/Bst'

export default function page() {
  return (
    <AlgorithmWrapperPage title={'Bst Tree'} info={<BstInfo />}>
      <AnimationBst />
    </AlgorithmWrapperPage>
  )
}
