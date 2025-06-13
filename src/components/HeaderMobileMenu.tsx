import React from 'react'
import Link from 'next/link'

export default function HeaderMobileMenu() {
  return (
    <div className="md:hidden p-5 bg-zinc-300 rounded-xl space-y-2 absolute top-18 left-0 text-lg font-medium">
      <Link
        href="#"
        className="block p-2 hover:text-gray-600 rounded-sm transition hover:bg-gray-400"
      >
        Inicio
      </Link>
      <Link
        href="#"
        className="block p-2 hover:text-gray-600 rounded-sm transition hover:bg-gray-400"
      >
        Algoritmos
      </Link>
      <Link
        href="#"
        className="block p-2 hover:text-gray-600 rounded-md transition hover:bg-gray-400"
      >
        Acerca
      </Link>
    </div>
  )
}
