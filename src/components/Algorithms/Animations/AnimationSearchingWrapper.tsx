'use client'
import React, { useState } from 'react'
import ButtonController from '@/components/Controls/ButtonController'
import { SearchItem } from '@/components/SearchItem'
import { algorithmSearchingMap } from '@/data/typeAlgorithms'

export default function AnimationSearchingWrapper({
  algorithmType,
  speed
}: {
  algorithmType: string
  speed: number
}) {
  const array = [12, 24, 2, 20, 7, 69, 23, 18, 13, 90, 4, 17, 42]
  const data = [...array]
  const searchArray =
    algorithmType === 'binary' ? [...data].sort((a, b) => a - b) : data

  const [target, setTarget] = useState<number>(23)
  const [highlighted, setHighlighted] = useState<number | null>(null)
  const [range, setRange] = useState<[number, number] | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  const animate = async () => {
    setIsSearching(true)
    setResult(null)

    const steps = algorithmSearchingMap[algorithmType](searchArray, target)

    if (algorithmType === 'binary') {
      setRange([0, searchArray.length - 1])
    }

    let left = 0
    let right = searchArray.length - 1

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i]

      if (step.type === 'compare') {
        setHighlighted(step.index ?? null)
        if (algorithmType === 'binary') {
          setRange([left, right])
        }
      }

      if (step.type === 'found') {
        setHighlighted(step.index ?? null)
        setResult(`Value found at position ${step.index}`)
        break
      }

      if (step.type === 'not-found') {
        setHighlighted(null)
        setRange(null)
        setResult('Value not found')
      }

      if (
        algorithmType === 'binary' &&
        step.type === 'compare' &&
        step.index !== undefined
      ) {
        const midVal = searchArray[step.index]
        if (midVal < target) left = step.index + 1
        else if (midVal > target) right = step.index - 1
      }

      await new Promise(res => setTimeout(res, speed))
    }

    setIsSearching(false)
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setTarget(Number(e.target.value))
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full lg:p-4 md:gap-8">
      <div className="flex gap-3 w-full justify-center flex-wrap">
        {searchArray.map((value, i) => {
          const isInRange = range && i >= range[0] && i <= range[1]
          const isHighlighted = highlighted === i

          return (
            <SearchItem
              key={i}
              value={value}
              index={i}
              isHighlighted={isHighlighted}
              isInRange={!!isInRange}
            />
          )
        })}
      </div>

      <div className="flex pb-1 gap-2 w-full">
        <label className="flex flex-col flex-1 text-gray-500">
          Select number to search:
          <input
            type="number"
            value={target}
            onChange={handleValueChange}
            className="max-w-40 sm:max-w-60 lg:max-w-80 px-2 py-1 border rounded bg-slate-400 text-[14px] text-gray-100"
            disabled={isSearching}
          />
        </label>
        <ButtonController onClick={animate} disabled={isSearching}>
          Search
        </ButtonController>
      </div>

      {result && (
        <div
          style={{
            color:
              result === 'Value not found'
                ? 'rgb(220, 38, 38)'
                : 'rgb(32, 169, 93)'
          }}
          className="text-xl font-semibold"
        >
          {result}
        </div>
      )}
    </div>
  )
}
