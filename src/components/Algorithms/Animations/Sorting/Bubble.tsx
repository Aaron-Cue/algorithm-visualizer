'use client'
import React, { useMemo, useState } from 'react'
import ButtonController from '@/components/Controls/ButtonController'
import Slider from '@/components/Controls/Slider'
import { getBubbleSortSteps } from '@/lib/Bubble'

export default function Bubble() {
  const initialArray: number[] = [30, 10, 50, 2, 40, 15, 43, 8, 19, 24]

  const [values, setValues] = useState<number[]>([...initialArray])
  const [randomValues, setRandomValues] = useState<number[]>([])
  const [highlighted, setHighlighted] = useState<number[]>([])
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [speed, setSpeed] = useState(150)

  const steps = useMemo(() => getBubbleSortSteps(values), [values])

  const animate = async () => {
    setIsPlaying(true)
    const vals = [...values]

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
    if (randomValues.length > 0) {
      setValues([...randomValues])
    } else {
      setValues([...initialArray])
    }
    animate()
  }

  const handleRandomize = () => {
    const randomArray = Array.from(
      { length: initialArray.length },
      () => Math.random() * 100 + 4
    )
    setValues(randomArray)
    setRandomValues(randomArray)
  }

  return (
    <>
      <div className="flex justify-center gap-3 mb-6">
        <ButtonController onClick={animate} disabled={isPlaying}>
          Start
        </ButtonController>
        <ButtonController onClick={handleRestart} disabled={isPlaying}>
          Restart
        </ButtonController>
        <ButtonController onClick={handleRandomize} disabled={isPlaying}>
          Randomize
        </ButtonController>
        <Slider speed={speed} setSpeed={setSpeed} />
        {/* {controll for change size} */}
      </div>
      <div className="space-y-4 my-3">
        <div className="flex justify-center gap-2 items-end">
          {values.map((v, i) => (
            <div
              key={i}
              className={`w-5 bg-blue-500 ${
                highlighted.includes(i) ? 'bg-red-500' : ''
              }`}
              style={{ height: `${v * 2.5}px` }}
            />
          ))}
        </div>
      </div>
    </>
  )
}
