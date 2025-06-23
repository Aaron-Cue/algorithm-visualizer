export type SortingAction = {
  type: 'compare' | 'swap' | 'set'
  indices: number[]
  values?: number[]
}

export type SearchAction = {
  type: 'compare' | 'found' | 'not-found'
  index?: number
}

export type Node = {
  id: number
  x: number
  y: number
  parent: number | null
}