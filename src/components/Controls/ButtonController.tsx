import React from 'react'

export default function ButtonController({ onClick, disabled, children }: {
  onClick: () => void
  disabled?: boolean
  children?: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-green-500 text-white rounded"
    >
      {children}
    </button>
  )
}
