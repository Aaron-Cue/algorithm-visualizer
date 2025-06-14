import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <span>layout</span>
      <section>{children}</section>
    </div>
  )
}
