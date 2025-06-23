import InfoWrapper from "../InfoWrapper"

export default function Quick() {
  const pseudocode = `quickSort(arr):
  if len(arr) <= 1:
    return arr
  pivot = choose a pivot element
  less = elements < pivot
  equal = elements == pivot
  greater = elements > pivot
  return quickSort(less) + equal + quickSort(greater)`
    
    return (
      <InfoWrapper
        description="Quick Sort is a divide-and-conquer algorithm that selects a 'pivot' and partitions the array into elements less than, equal to, and greater than the pivot. It then recursively sorts the partitions."
        steps={[
          'Choose a pivot element from the array.',
          'Partition the array into elements less than, equal to, and greater than the pivot.',
          'Recursively apply Quick Sort to the partitions.',
          'Combine the sorted partitions to form the final sorted array.'
        ]}
        pseudocode={pseudocode}
        complexity={['O(n log(n))', 'O(log n)']}
      />
    )
}