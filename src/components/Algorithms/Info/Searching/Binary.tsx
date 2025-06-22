import InfoWrapper from "../InfoWrapper"

export default function Binary() {
  const pseusocode = `binarySearch(arr, target):
  low = 0
  high = len(arr) - 1
  while low <= high:
    mid = (low + high) / 2
    if arr[mid] == target:
      return mid
    else if arr[mid] < target:
      low = mid + 1
    else:
      high = mid - 1
      return -1`

  return (
    <InfoWrapper
      description="Binary Search is an efficient algorithm for finding an element in a sorted array. It works by repeatedly dividing the search interval in half, significantly reducing the number of comparisons needed."
      steps={[
        'Find the middle index of the current search range.',
        'Compare the middle element with the target value.',
        'If they match, the search is complete.',
        'If the target is smaller, search the left half. If larger, search the right half.',
        'Repeat the process until the element is found or the range is empty.'
      ]}
      pseudocode={pseusocode}
      complexity={['O(log n)', 'O(1)']}
    />
  )
}