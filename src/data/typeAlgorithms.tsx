import { getBubbleSortSteps } from '@/lib/Bubble'
import { getBucketSortSteps } from '@/lib/Bucket'
import { getCountingSortSteps } from '@/lib/Counting'
import { getInsertionSortSteps } from '@/lib/Insertion'
import { getMergeSortSteps } from '@/lib/Merge'
import { getQuickSortSteps } from '@/lib/Quick'
import { getSelectionSortSteps } from '@/lib/Selection'
import { SortingAction } from '@/types/algorithms'

export const algorithmMap: Record<string, (arr: number[]) => SortingAction[]> = {
  bubble: getBubbleSortSteps,
  selection: getSelectionSortSteps,
  insertion: getInsertionSortSteps,
  counting: getCountingSortSteps,
  quick: getQuickSortSteps,
  bucket: getBucketSortSteps,
  merge: getMergeSortSteps
}