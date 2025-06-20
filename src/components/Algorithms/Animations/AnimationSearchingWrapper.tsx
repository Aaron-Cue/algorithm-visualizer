'use client'
import React, { useState } from 'react'
import { algorithmSearchingMap } from '@/data/typeAlgorithms'

export default function AnimationSearchingWrapper({
  algorithmType
}: {
  algorithmType: string
}) {
  const array = [12, 24, 2, 20, 7, 14, 23, 18, 13, 9, 4, 17]
  const [target, setTarget] = useState<number>(23)
  const [highlighted, setHighlighted] = useState<number | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  const animate = async () => {
    setIsSearching(true)
    setResult(null)

    const steps = algorithmSearchingMap[algorithmType](array, target)

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i]

      if (step.type === 'compare') {
        setHighlighted(step.index ?? null)
      }

      if (step.type === 'found') {
        setHighlighted(step.index ?? null)
        setResult(`Value found at position ${step.index}`)
        break
      }

      if (step.type === 'not-found') {
        setHighlighted(null)
        setResult('Value not found')
      }

      await new Promise(res => setTimeout(res, 300))
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
        {array.map((value, i) => (
          <div
            key={i}
            className={`min-w-8 md:w-10 lg:w-13 h-12 md:h-15 lg:h-17 flex items-center justify-center border rounded ${
              highlighted === i ? 'bg-yellow-400' : 'bg-blue-500'
            } text-white`}
          >
            {value}
          </div>
        ))}
      </div>

      <div className="flex pb-1 gap-2 w-full">
        <label className="flex flex-col flex-1">
          Select number to search:
          <input
            type="number"
            value={target}
            onChange={handleValueChange}
            className="max-w-40 sm:max-w-60 lg:max-w-80 px-2 py-1 border rounded bg-slate-400 text-[14px] text-gray-100"
            disabled={isSearching}
          />
        </label>

        <button
          onClick={animate}
          disabled={isSearching}
          className="px-4 py-1 bg-green-600 text-white rounded disabled:opacity-50 cursor-pointer"
        >
          Search
        </button>
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
