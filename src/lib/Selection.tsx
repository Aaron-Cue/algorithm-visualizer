import { SortingAction } from '@/types/algorithms'

export function getSelectionSortSteps(arr: number[]): SortingAction[] {
  const steps: SortingAction[] = []
  const copy = [...arr]

  for (let i = 0; i < copy.length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < copy.length; j++) {
      steps.push({ type: 'compare', indices: [minIndex, j] })

      if (copy[j] < copy[minIndex]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      steps.push({ type: 'swap', indices: [i, minIndex] })
      ;[copy[i], copy[minIndex]] = [copy[minIndex], copy[i]]
    }
  }

  return steps
}