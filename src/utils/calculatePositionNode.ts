export function calculatePositionNode(
  parentX: number,
  level: number,
  isLeft: boolean,
  index: number
) {
  const verticalGap = 100
  const horizontalGap = 100 / level
  const y = 50 + level * verticalGap
  const x = isLeft
    ? parentX - horizontalGap * (index + 1)
    : parentX + horizontalGap * (index + 1)
  return { x, y }
}