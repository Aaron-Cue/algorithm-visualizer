import { getBubbleSortSteps } from '@/lib/Bubble'
import { getBucketSortSteps } from '@/lib/Bucket'
import { getCountingSortSteps } from '@/lib/Counting'
import { getInsertionSortSteps } from '@/lib/Insertion'
import getLinearSearchSteps from '@/lib/LinearSearch'
import { getMergeSortSteps } from '@/lib/Merge'
import { getQuickSortSteps } from '@/lib/Quick'
import { getSelectionSortSteps } from '@/lib/Selection'
import { SearchAction, SortingAction } from '@/types/algorithms'

const algorithmSortingMap: Record<string, (arr: number[]) => SortingAction[]> = {
  bubble: getBubbleSortSteps,
  selection: getSelectionSortSteps,
  insertion: getInsertionSortSteps,
  counting: getCountingSortSteps,
  quick: getQuickSortSteps,
  bucket: getBucketSortSteps,
  merge: getMergeSortSteps
}

export const algorithmSearchingMap: Record<string, (arr: number[], target:number) => SearchAction[]> = {
  linear: getLinearSearchSteps
}

export default algorithmSortingMap