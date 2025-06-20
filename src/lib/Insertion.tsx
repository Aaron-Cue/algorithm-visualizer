import { Action } from '@/types/algorithms'

export function getInsertionSortSteps(arr: number[]): Action[] {
  const steps: Action[] = []
  const copy = [...arr]

  for (let i = 1; i < copy.length; i++) {
    let j = i
    while (j > 0) {
      steps.push({ type: 'compare', indices: [j - 1, j] })
      if (copy[j - 1] > copy[j]) {
        steps.push({ type: 'swap', indices: [j - 1, j] })
        ;[copy[j - 1], copy[j]] = [copy[j], copy[j - 1]]
        j--
      } else {
        break
      }
    }
  }

  return steps
}
