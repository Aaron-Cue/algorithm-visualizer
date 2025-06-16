'use client'
import React, { useState } from 'react'
import ButtonController from '@/components/Controls/ButtonController'
import SelectSize from '@/components/Controls/Select'
import Slider from '@/components/Controls/Slider'
import { getBubbleSortSteps } from '@/lib/Bubble'
import { Action } from '@/types/algorithms'
import { getRandomArray } from '@/utils/getRandomArray'

const algorithmMap: Record<string, (arr: number[]) => Action[]> = {
  bubble: getBubbleSortSteps
}

export default function AnimationWrapper({
  algorithmType
}: {
  algorithmType: string
}) {
  const initialArray: number[] = [79, 33, 37, 64, 89, 30, 84, 58, 66, 99]

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

      await new Promise(res => setTimeout(res, speed))
    }

    setHighlighted([])
    setIsPlaying(false)
  }

  const handleRestart = () => {
    const newValues =
      randomValues.length > 0 ? [...randomValues] : [...baseValues]
    setValues(newValues)
    animate([...newValues])
  }

  const handleRandomize = () => {
    const randomArray = getRandomArray(values.length)
    setValues(randomArray)
    setRandomValues(randomArray)
  }

  const handleSizeChange = (size: string) => {
    const newArray = getRandomArray(parseInt(size))
    setValues(newArray)
    setBaseValues(newArray)
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="flex gap-3">
          <ButtonController
            onClick={() => animate([...values])}
            disabled={isPlaying}
          >
            Start
          </ButtonController>
          <ButtonController onClick={handleRestart} disabled={isPlaying}>
            Restart
          </ButtonController>
          <ButtonController onClick={handleRandomize} disabled={isPlaying}>
            Randomize
          </ButtonController>
        </div>
        <div className="flex justify-center gap-10 w-full px-2">
          <Slider speed={speed} setSpeed={setSpeed} disabled={isPlaying} />
          <SelectSize
            handleSizeChange={handleSizeChange}
            disabled={isPlaying}
          />
        </div>
      </div>
      <div className="space-y-4 my-3">
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
