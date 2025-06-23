import React, { useState } from 'react'
import NavItem from './NavItem'

export default function NavMenu({
  className,
  setOpen
}: {
  className: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <nav className={className}>
      <NavItem
        href="#"
        label="Sorting"
        setOpen={setOpen}
        subItems={[
          'Selection',
          'Insertion',
          'Bubble',
          'Quick',
          'Merge',
          'Counting',
          'Bucket'
        ]}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <NavItem
        href="#"
        label="Searching"
        setOpen={setOpen}
        subItems={['Linear-Search', 'Binary-Search']}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <NavItem
        href="#"
        label="Trees"
        setOpen={setOpen}
        subItems={['Bst', 'Avl', 'Trie']}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      {/* <NavItem
        href="#"
        label="Graphs"
        setOpen={setOpen}
        subItems={[
          'Bfs',
          'Dfs',
          'Dijkstra',
          'Bellman-Ford',
          'Floyd-Warshall',
          'Kruskal'
        ]}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <NavItem
        href="#"
        label="Other"
        setOpen={setOpen}
        subItems={['Dynamic-Programming', 'Backtracking', 'Greedy']}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      /> */}
    </nav>
  )
}
