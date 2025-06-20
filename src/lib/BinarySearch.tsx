import { SearchAction } from "@/types/algorithms"

export function getBinarySearchSteps(
  arr: number[],
  target: number
): SearchAction[] {
  const steps: SearchAction[] = []
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    steps.push({ type: 'compare', index: mid })

    if (arr[mid] === target) {
      steps.push({ type: 'found', index: mid })
      return steps
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  steps.push({ type: 'not-found' })
  return steps
}
