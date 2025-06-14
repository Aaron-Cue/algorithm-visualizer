import React from 'react'
import Link from 'next/link'

export default function NavItem({ href, label, children }: { href: string, label: string, children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative block py-2 px-4 mx-1 hover:text-gray-600 rounded-sm transition hover:bg-gray-400 group"
    >
      {label}
      {children}
    </Link>
  )
}
