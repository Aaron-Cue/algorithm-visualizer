import React from 'react'
import NavItem from './NavItem'
import SubNavItem from './SubNavItem'

export default function NavMenu({className}: {className: string}) {
  return (
    <nav className={className}>
      <NavItem href="#" label="Sorting">
        <SubNavItem subItems={['Selection', 'Insertion', 'Bubble', 'Quick', 'Merge', 'Counting', 'Bucket']} />
      </NavItem>
      <NavItem href="#" label="Searching">
        <SubNavItem subItems={['Linear-Search', 'Binary-Search']} />
      </NavItem>
      <NavItem href="#" label="Trees">
        <SubNavItem subItems={['Bst', 'Avl', 'Trie']} />
      </NavItem>
      <NavItem href="#" label="Graphs">
        <SubNavItem
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
        <SubNavItem subItems={['Dynamic-Programming', 'Backtracking', 'Greedy']} />
      </NavItem>
    </nav>
  )
}
