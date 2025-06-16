import React from 'react'
import { Slider } from '@/components/ui/slider'

export default function SpeedSlider({
  speed,
  setSpeed,
  disabled
}: {
  speed: number
  setSpeed: React.Dispatch<React.SetStateAction<number>>
  disabled: boolean
}) {
  return (
    <div className="w-[50%] max-w-3xs">
      <p className="mb-2 text-sm">Speed</p>
      <Slider
        disabled={disabled}
        min={5}
        max={300}
        step={10}
        value={[300 - speed]}
        onValueChange={val => setSpeed(300 - val[0])}
      />
    </div>
  )
}
