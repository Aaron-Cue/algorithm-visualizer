import { SortingAction } from '@/types/algorithms'

export function getBubbleSortSteps(arr: number[]): SortingAction[] {
  const steps: SortingAction[] = []
  const copy = [...arr]

  for (let i = 0; i < copy.length - 1; i++) {
    for (let j = 0; j < copy.length - i - 1; j++) {
      steps.push({ type: 'compare', indices: [j, j + 1] })

      if (copy[j] > copy[j + 1]) {
        steps.push({ type: 'swap', indices: [j, j + 1] })
        ;[copy[j], copy[j + 1]] = [copy[j + 1], copy[j]]
      }
    }
  }

  return steps
}
