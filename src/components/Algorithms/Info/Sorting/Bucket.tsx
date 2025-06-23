import InfoWrapper from '../InfoWrapper'

export default function Bucket() {
  const pseudocode = `bucketSort(arr):
  create empty buckets
  for each element in arr:
    insert element into appropriate bucket
  sort each bucket individually
  concatenate all buckets into a single array`

  return (
    <InfoWrapper
      description="Bucket Sort distributes elements into several buckets, sorts each bucket individually (often using another sorting algorithm), and then concatenates the results. It's efficient for uniformly distributed data."
      steps={[
        'Determine the number of buckets based on the input range.',
        'Distribute the elements into their corresponding buckets.',
        'Sort each bucket (typically with Insertion Sort or another efficient sort).',
        'Concatenate all sorted buckets to produce the final sorted array.'
      ]}
      pseudocode={pseudocode}
      complexity={['O(n + k)', 'O(n + k), where k is number of buckets']}
    />
  )
}
