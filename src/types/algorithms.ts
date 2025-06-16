export type Action = {
  type: 'compare' | 'swap' | 'set'
  indices: number[]
  values?: number[]
}
