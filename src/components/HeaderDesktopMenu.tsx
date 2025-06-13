import React from 'react'
import Link from 'next/link'

export default function HeaderDesktopMenu() {
  return (
    <nav className="hidden md:flex space-x-6 md:mr-16">
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
    </nav>
  )
}
