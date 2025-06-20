import { SearchAction } from "@/types/algorithms";

export default function getLinearSearchSteps(arr: number[], target: number): SearchAction[] {
  const steps: SearchAction[] = []

  for (let i = 0; i < arr.length; i++) {
    steps.push({ type: 'compare', index: i })
    if (arr[i] === target) {
      steps.push({ type: 'found', index: i })
      return steps
    }
  }

  steps.push({ type: 'not-found' })
  return steps
}