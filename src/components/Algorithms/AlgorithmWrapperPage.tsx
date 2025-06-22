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
      <section>
        {children}
      </section>
      <section>
        <h2 className="text-[30px] text-slate-700 font-bold ml-20 mt-4 pt-4">
          About algorithm
        </h2>
        <div className='px-2'>{info}</div>
      </section>
    </>
  )
}
