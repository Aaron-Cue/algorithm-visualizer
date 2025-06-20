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
      className={`min-w-8 md:w-10 lg:w-13 h-12 md:h-15 lg:h-17 flex items-center justify-center border rounded ${bgColor} text-white`}
    >
      {value}
    </div>
  )
}
