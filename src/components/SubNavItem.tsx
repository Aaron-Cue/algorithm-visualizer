import React from 'react'
import Link from 'next/link'

export default function SubNavItem({
  subItems
}: {
  subItems: string[]
}) {
  return (
    <div
      className={`absolute opacity-0 w-40 left-[103px] top-0 bg-gray-400 text-white text-xs p-2 rounded-md group-hover:opacity-100 md:opacity-0 invisible group-hover:visible md:left-0 md:top-10`}
    >
      {subItems.map(subItem => (
        <Link
          key={subItem}
          href={`/${subItem}`}
          className="block hover:bg-gray-600 rounded px-2 py-1"
        >
          {subItem}
        </Link>
      ))}
    </div>
  )
}
