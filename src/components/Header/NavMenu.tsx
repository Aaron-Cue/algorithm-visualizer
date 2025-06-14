import React from 'react'
import NavItem from './NavItem'
import SubNavItem from './SubNavItem'

export default function NavMenu({
  className,
  setOpen
}: {
  className: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <nav className={className}>
      <NavItem href="#" label="Sorting">
        <SubNavItem
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
        />
      </NavItem>
      <NavItem href="#" label="Searching">
        <SubNavItem
          setOpen={setOpen}
          subItems={['Linear-Search', 'Binary-Search']}
        />
      </NavItem>
      <NavItem href="#" label="Trees">
        <SubNavItem setOpen={setOpen} subItems={['Bst', 'Avl', 'Trie']} />
      </NavItem>
      <NavItem href="#" label="Graphs">
        <SubNavItem
          setOpen={setOpen}
          subItems={[
            'Bfs',
            'Dfs',
            'Dijkstra',
            'Bellman-Ford',
            'Floyd-Warshall',
            'Kruskal'
          ]}
        />
      </NavItem>
      <NavItem href="#" label="Other">
        <SubNavItem
          setOpen={setOpen}
          subItems={['Dynamic-Programming', 'Backtracking', 'Greedy']}
        />
      </NavItem>
    </nav>
  )
}
