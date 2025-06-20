import { SortingAction } from '@/types/algorithms'

export function getBucketSortSteps(arr: number[]): SortingAction[] {
  const steps: SortingAction[] = []
  const copy = [...arr]
  const n = copy.length
  if (n === 0) return steps

  const max = Math.max(...copy)
  const min = Math.min(...copy)
  const bucketCount = Math.floor(Math.sqrt(n))
  const buckets: number[][] = Array.from({ length: bucketCount }, () => [])

  // Distribute into buckets
  for (let i = 0; i < n; i++) {
    const index = Math.floor(((copy[i] - min) / (max - min + 1)) * bucketCount)
    buckets[index].push(copy[i])
  }

  // Sort each bucket (using insertion sort) and collect
  let idx = 0
  for (let b = 0; b < buckets.length; b++) {
    const bucket = buckets[b]
    for (let i = 1; i < bucket.length; i++) {
      let j = i
      while (j > 0 && bucket[j - 1] > bucket[j]) {
        steps.push({ type: 'compare', indices: [idx + j - 1, idx + j] })
        steps.push({ type: 'swap', indices: [idx + j - 1, idx + j] })
        ;[bucket[j - 1], bucket[j]] = [bucket[j], bucket[j - 1]]
        j--
      }
    }

    // Push sorted values into original array
    for (let k = 0; k < bucket.length; k++) {
      steps.push({ type: 'set', indices: [idx], values: [bucket[k]] })
      copy[idx] = bucket[k]
      idx++
    }
  }

  return steps
}
