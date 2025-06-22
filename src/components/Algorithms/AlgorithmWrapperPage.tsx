import React from 'react'

export default function AlgorithmWrapperPage({
  title,
  children,
  info
}: {
  title: string
  children: React.ReactNode
  info: React.ReactNode
}) {
  return (
    <>
      <h1 className="text-4xl font-bold italic mb-12">{title}</h1>
      <section className="flex flex-col justify-between my-12 p-3 pb-0 pt-4 border-1 max-w-4xl mx-auto bg-slate-200 h-130">
        {children}
      </section>
      <section>
        <h2 className="text-[27px] text-slate-700 font-bold my-3 pt-4">
          About algorithm
        </h2>
        <div className='px-2'>{info}</div>
      </section>
    </>
  )
}
