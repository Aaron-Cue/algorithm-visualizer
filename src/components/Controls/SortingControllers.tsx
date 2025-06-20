import React from 'react'
import ButtonController from '@/components/Controls/ButtonController'
import SelectSize from '@/components/Controls/Select'
import Slider from '@/components/Controls/Slider'
import { getRandomArray } from '@/utils/getRandomArray'

type SortingControllersProps = {
  animate: (vals: number[]) => void
  randomValues: number[]
  setValues: (vals: number[]) => void
  baseValues: number[]
  values: number[]
  setRandomValues: (vals: number[]) => void
  setBaseValues: (vals: number[]) => void
  isPlaying: boolean
  speed: number
  setSpeed: React.Dispatch<React.SetStateAction<number>>
}

export default function SortingControllers({
  animate,
  values,
  setValues,
  randomValues,
  setRandomValues,
  baseValues,
  setBaseValues,
  isPlaying,
  speed,
  setSpeed
}: SortingControllersProps) {

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
        <SelectSize handleChange={handleSizeChange} disabled={isPlaying} />
      </div>
    </>
  )
}
