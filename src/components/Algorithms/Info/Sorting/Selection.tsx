import InfoWrapper from "../InfoWrapper"

export default function Selection() {
  const pseudocode = `selectionSort(arr):
  n = len(arr)
  for i from 0 to n - 1:
    minIndex = i
    for j from i + 1 to n - 1:
      if arr[j] < arr[minIndex]:
        minIndex = j
    swap arr[i] with arr[minIndex]`
    
    return (
      <InfoWrapper
        description="Selection Sort repeatedly finds the minimum element from the unsorted part and moves it to the beginning. It's simple but inefficient for large datasets."
        steps={[
          'Start from the first element.',
          'Find the smallest element in the unsorted part of the array.',
          'Swap it with the current element.',
          'Move the boundary of the sorted part one step forward.',
          'Repeat until the array is sorted.'
        ]}
        pseudocode={pseudocode}
        complexity={['O(n²)', 'O(1)']}
      />
    )
}