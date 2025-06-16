import React from 'react'

export default function ButtonController({ onClick, disabled, children }: {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  children?: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled ? 'bg-slate-400 !cursor-default !text-gray-300' : ''
      } px-4 py-2 bg-green-500 text-white rounded cursor-pointer`}
    >
      {children}
    </button>
  )
}
