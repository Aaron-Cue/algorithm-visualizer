import InfoWrapper from "../InfoWrapper"

export default function Insertion() {
  const pseudocode = `insertionSort(arr):
  for i from 1 to len(arr) - 1:
    key = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > key:
      arr[j + 1] = arr[j]
      j = j - 1
    arr[j + 1] = key`
  
  return (
    <InfoWrapper
      description="Insertion Sort builds the sorted array one element at a time by repeatedly taking the next element and inserting it into its correct position relative to the already sorted part."
      steps={[
        'Start with the second element in the array.',
        'Compare it with elements before it and insert it into the correct position.',
        'Repeat for each element in the array.',
        'Shift elements as needed to make space for the insertion.',
        'Continue until the array is fully sorted.'
      ]}
      pseudocode={pseudocode}
      complexity={['O(n²)', 'O(1)']} 
    />
  )
}