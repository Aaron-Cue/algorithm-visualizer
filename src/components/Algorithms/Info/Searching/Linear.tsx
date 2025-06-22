import InfoWrapper from "../InfoWrapper"

export default function Linear() {
  const pseudocode = `linearSearch(arr, target):
  for i from 0 to len(arr) - 1:
    if arr[i] == target:
      return i
  return -1`

  return (
    <InfoWrapper
      description="Linear Search is the simplest method to find an element in a list. It sequentially checks each element until the target is found or the end of the list is reached."
      steps={[
        'Start from the first element of the array.',
        'Compare the current element with the target value.',
        'If they match, return the index.',
        'If not, move to the next element.',
        'Repeat until the target is found or the end of the array is reached.'
      ]}
      pseudocode={pseudocode}
      complexity={['O(n)', 'O(1)']}
    />
  )

}