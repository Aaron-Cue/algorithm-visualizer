import InfoWrapper from '../InfoWrapper'

export default function Counting() {
  const pseudocode = `countingSort(arr):
  find the maximum value in arr
  create a count array of size (max + 1)
  for each element in arr:
    increment count[element]
  for i from 1 to length of count:
    count[i] += count[i - 1]
  build the output array by placing elements at their correct positions`

  return (
    <InfoWrapper
      description="Counting Sort is an integer sorting algorithm that counts the occurrences of each value. It's efficient when the range of input values is not significantly larger than the number of elements."
      steps={[
        'Find the maximum value in the input array.',
        'Initialize a count array to store the frequency of each value.',
        'Update the count array to reflect positions.',
        'Build the output array using the count positions.',
        'Copy the sorted values back into the original array.'
      ]}
      pseudocode={pseudocode}
      complexity={['O(n + k)', 'O(k), where k is the range of input values']}
    />
  )
}
