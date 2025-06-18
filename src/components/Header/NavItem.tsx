'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import SubNavItem from './SubNavItem'

export default function NavItem({
  href,
  label,
  setOpen,
  subItems,
  activeMenu,
  setActiveMenu
}: {
  href: string
  label: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  subItems?: string[]
  activeMenu: string | null
  setActiveMenu: React.Dispatch<React.SetStateAction<string | null>>
}) {
  const isOpen = activeMenu === label
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(hover: none) and (pointer: coarse)')
    const handleChange = () => setIsMobile(media.matches)
    setIsMobile(media.matches)

    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile && subItems) {
      e.preventDefault()
      setActiveMenu(isOpen ? null : label)
    }
  }

  return (
    <div className="relative group">
      <Link
        onClick={handleClick}
        href={href}
        className="relative block py-2 px-4 mx-1 hover:!text-gray-600 rounded-sm transition hover:!bg-gray-400 group"
        style={{
          color: isOpen ? '#4a5565' : 'inherit',
          background: isOpen ? '#99a1af' : 'inherit'
        }}
      >
        {label}
      </Link>

      {subItems && (
        <div
          className={`
            absolute top-[-4px] left-1 mt-1 w-40 z-10
            ${
              isMobile
                ? isOpen
                  ? 'block'
                  : 'hidden'
                : 'hidden group-hover:block'
            }
          `}
        >
          <SubNavItem
            setOpen={setOpen}
            openSubMenu={isOpen}
            subItems={subItems}
          />
        </div>
      )}
    </div>
  )
}
