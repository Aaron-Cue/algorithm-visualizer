import { SortingAction } from '@/types/algorithms'

export function getCountingSortSteps(arr: number[]): SortingAction[] {
  const steps: SortingAction[] = []
  const copy = [...arr]
  const max = Math.max(...copy)
  const count = Array(max + 1).fill(0)

  // contar ocurrencias
  for (let i = 0; i < copy.length; i++) {
    count[copy[i]]++
  }

  // array ordenado
  let index = 0
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      steps.push({ type: 'set', indices: [index], values: [i] })
      index++
      count[i]--
    }
  }

  return steps
}