import React from 'react'
import { Menu, X } from 'lucide-react'

export default function BurgaButton({
  open,
  setOpen
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <button onClick={() => setOpen(!open)} className="md:hidden text-white">
      {open ? (
        <X className="text-gray-700 cursor-pointer" size={28} />
      ) : (
        <Menu className="text-gray-700 cursor-pointer" size={28} />
      )}
    </button>
  )
}
