export type SortingAction = {
  type: 'compare' | 'swap' | 'set'
  indices: number[]
  values?: number[]
}
