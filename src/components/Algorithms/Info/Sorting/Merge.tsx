import InfoWrapper from "../InfoWrapper"

export default function Merge() {
  const pseudocode = `mergeSort(arr):
  if len(arr) <= 1:
    return arr
  mid = len(arr) / 2
  left = mergeSort(arr[:mid])
  right = mergeSort(arr[mid:])
  return merge(left, right)`
    
    return (
      <InfoWrapper
        description="Merge Sort is a divide-and-conquer algorithm that recursively splits the array into halves, sorts each half, and then merges the sorted halves to produce a sorted array."
        steps={[
          'Divide the array into two halves.',
          'Recursively sort each half.',
          'Merge the two sorted halves into one sorted array.',
          'Repeat until the entire array is sorted.'
        ]}
        pseudocode={pseudocode}
        complexity={['O(n log(n))', 'O(n)']}
      />
    )
}