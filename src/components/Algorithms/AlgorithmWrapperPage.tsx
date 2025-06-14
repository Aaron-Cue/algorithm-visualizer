import React from 'react'

export default function AlgorithmWrapperPage({
  title,
  children,
  info
}: {
  title: string
  children: React.ReactNode
  info: string
}) {
  return (
    <>
      <h1 className='text-4xl font-bold italic mb-12'>{title}</h1>
      <section className='my-12 p-2'>{children}</section>
      <div>{info}</div>
    </>
  )
}
