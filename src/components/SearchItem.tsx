type SearchItemProps = {
  value: number
  index: number
  isHighlighted: boolean
  isInRange: boolean
}

export function SearchItem({
  value,
  index,
  isHighlighted,
  isInRange
}: SearchItemProps) {
  const bgColor = isHighlighted
    ? 'bg-yellow-400'
    : isInRange
    ? 'bg-blue-600'
    : 'bg-zinc-700'

  return (
    <div
      key={index}
      className={`min-w-18 lg:min-w-14 h-14 flex items-center justify-center border rounded ${bgColor} text-white`}
    >
      {value}
    </div>
  )
}
