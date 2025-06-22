import React from 'react'

type InfoWrapperProps = {
  description: string
  steps: string[]
  pseudocode: string
  complexity: string[]
}

export default function InfoWrapper({
  description,
  steps,
  pseudocode,
  complexity
}: InfoWrapperProps) {
  return (
    <div className="p-4 sm:p-8 border border-white max-w-[968px] text-black space-y-6 lg:mx-auto">
      <div className="mb-12 mt-4">
        <h3 className="text-2xl font-semibold mb-2">Explanation</h3>
        <p className="ml-1 max-w-3xl text-sm leading-relaxed">{description}</p>
      </div>

      <div className="my-12">
        <h3 className="text-2xl font-semibold mb-2">Steps</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm pl-2">
          {steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-8 my-12">
        <div className="flex-3">
          <h3 className="text-2xl font-semibold mb-2">Pseudocode</h3>
          <pre
            className="ml-1 border border-white p-4 bg-slate-200 rounded text-[16px] leading-[25px]
"
          >
            {pseudocode}
          </pre>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-medium mb-2">Complexity</h3>
          <div className="border border-white p-4 bg-slate-200 rounded text-sm">
            <p>
              <span className="font-semibold">Time:</span> {complexity[0]}
            </p>
            <p>
              <span className="font-semibold">Space:</span> {complexity[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
