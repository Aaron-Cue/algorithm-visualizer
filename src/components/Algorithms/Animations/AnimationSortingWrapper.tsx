'use client'
import React, { useState } from 'react'
import algorithmMap from '@/data/typeAlgorithms'
import { getRandomArray } from '@/utils/getRandomArray'
import SortingControllers from '../../Controls/SortingControllers'

export default function AnimationWrapper({
  algorithmType
}: {
  algorithmType: string
}) {
  const initialArray: number[] = getRandomArray(10)

  const [values, setValues] = useState<number[]>([...initialArray])
  const [randomValues, setRandomValues] = useState<number[]>([])
  const [baseValues, setBaseValues] = useState<number[]>([...initialArray])
  const [highlighted, setHighlighted] = useState<number[]>([])
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [speed, setSpeed] = useState<number>(140)

  const animate = async (vals: number[]) => {
    setIsPlaying(true)

    const steps = algorithmMap[algorithmType](vals)

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i]

      if (step.type === 'compare') {
        setHighlighted(step.indices)
      }

      if (step.type === 'swap') {
        const [i, j] = step.indices
        ;[vals[i], vals[j]] = [vals[j], vals[i]]
        setValues([...vals])
      }

      if (step.type === 'set') {
        const [i] = step.indices
        const [v] = step.values || []
        vals[i] = v
        setValues([...vals])
      }

      await new Promise(res => setTimeout(res, speed))
    }

    setHighlighted([])
    setIsPlaying(false)
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4 mb-6">
        <SortingControllers
          animate={animate}
          values={values}
          setValues={setValues}
          randomValues={randomValues}
          setRandomValues={setRandomValues}
          baseValues={baseValues}
          setBaseValues={setBaseValues}
          isPlaying={isPlaying}
          speed={speed}
          setSpeed={setSpeed}
        />
      </div>
      <div className="space-y-4 my-3 p-2 md:p-0">
        <div className="flex pt-8 justify-center gap-[6px] items-end">
          {values.map((v, i) => (
            <div
              key={i}
              className={`w-5 bg-blue-500 ${
                highlighted.includes(i) ? 'bg-red-500' : ''
              }`}
              style={{ height: `${v * 3}px` }}
            />
          ))}
        </div>
      </div>
    </>
  )
}
