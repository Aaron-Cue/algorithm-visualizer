import { Action } from "@/types/algorithms"


export function getQuickSortSteps(arr: number[]): Action[] {
  const steps: Action[] = []
  const copy = [...arr]

  function quicksort(start: number, end: number) {
    if (start >= end) return

    const pivot = copy[end]
    let i = start

    for (let j = start; j < end; j++) {
      steps.push({ type: 'compare', indices: [j, end] })
      if (copy[j] < pivot) {
        steps.push({ type: 'swap', indices: [i, j] })
        ;[copy[i], copy[j]] = [copy[j], copy[i]]
        i++
      }
    }

    steps.push({ type: 'swap', indices: [i, end] })
    ;[copy[i], copy[end]] = [copy[end], copy[i]]

    quicksort(start, i - 1)
    quicksort(i + 1, end)
  }

  quicksort(0, copy.length - 1)
  return steps
}
