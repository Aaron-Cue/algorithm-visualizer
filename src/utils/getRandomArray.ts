export function getRandomArray(size: number): number[] {
  return Array.from({ length: size }, () => Math.random() * 100 + 4)
}