import InfoWrapper from "../InfoWrapper"

export default function Bubble() {
  const pseudocode = `bubbleSort(arr):
  n = len(arr)
  for i from 0 to n - 1:
    for j from 0 to n - i - 1:
      if arr[j] > arr[j + 1]:
        swap arr[j] and arr[j + 1]`

  return (
    <InfoWrapper
      description="Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until no more swaps are needed."
      steps={[
        'Start at the beginning of the array.',
        'Compare each pair of adjacent elements.',
        'If they are in the wrong order, swap them.',
        'Continue to the end of the array (one pass).',
        'Repeat the process for all elements until the array is sorted.'
      ]}
      pseudocode={pseudocode}
      complexity={['O(n²)', 'O(1)']} 
    />
  )
}