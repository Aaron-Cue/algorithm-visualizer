import { Action } from "@/types/algorithms"

export function getMergeSortSteps(arr: number[]): Action[] {
  const steps: Action[] = []
  const copy = [...arr]

  function mergeSort(start: number, end: number) {
    if (start >= end) return

    const mid = Math.floor((start + end) / 2)
    mergeSort(start, mid)
    mergeSort(mid + 1, end)

    const temp: number[] = []
    let i = start
    let j = mid + 1

    while (i <= mid && j <= end) {
      steps.push({ type: 'compare', indices: [i, j] })
      if (copy[i] <= copy[j]) {
        temp.push(copy[i++])
      } else {
        temp.push(copy[j++])
      }
    }

    while (i <= mid) temp.push(copy[i++])
    while (j <= end) temp.push(copy[j++])

    for (let k = 0; k < temp.length; k++) {
      steps.push({ type: 'set', indices: [start + k], values: [temp[k]] })
      copy[start + k] = temp[k]
    }
  }

  mergeSort(0, copy.length - 1)
  return steps
}
