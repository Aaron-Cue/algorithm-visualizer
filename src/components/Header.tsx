'use client'
import { useState } from 'react'
import Link from 'next/link'
import BurgaButton from '@/components/BurgaButton'
import NavMenu from '@/components/NavMenu'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-zinc-200 text-gray-600 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <BurgaButton open={open} setOpen={setOpen} />

        {/* Logo */}
        <div className="text-[26px] font-bold italic cursor-pointer">
          <Link href="/">AlgoView</Link>
        </div>

        {/* gh icon */}
        <div className="md:order-1 mr-8">
          <a href="https://github.com/Aaron-Cue" target='_blank' rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-github-icon lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>

        <NavMenu className="hidden md:flex space-x-6 md:mr-16" />
      </div>

      {open && (
        <NavMenu className="md:hidden p-5 bg-zinc-300 rounded-xl space-y-2 absolute top-18 left-0 text-lg font-medium" />
      )}
    </header>
  )
}
