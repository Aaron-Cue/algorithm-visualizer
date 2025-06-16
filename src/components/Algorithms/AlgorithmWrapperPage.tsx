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
      <h1 className='text-4xl font-bold italic mb-12'>{title}</h1>
      <section className='my-12 p-3 pb-0 pt-4 border-1 max-w-4xl mx-auto bg-slate-200'>{children}</section>
      <div>{info}</div>
    </>
  )
}
