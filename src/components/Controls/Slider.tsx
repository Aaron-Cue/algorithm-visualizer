import React from 'react'
import { Slider } from '@/components/ui/slider'

export default function SpeedSlider({
  speed,
  setSpeed
}: {
  speed: number
  setSpeed: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <div className="w-[300px]">
      <p className="mb-2 text-sm">Speed</p>
      <Slider
        min={10}
        max={200}
        step={10}
        value={[speed]}
        onValueChange={val => setSpeed(val[0])}
      />
    </div>
  )
}
