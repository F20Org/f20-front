import type { themes } from '@themes/'

export type StatsProps = {
  label: string
  focusLabel: string
  maxPoints: number
  currentPoints: number
  color: keyof typeof themes.COLORS
  arrowImage: string
  arrowPlusImage: string
  borderImage: string
  setPoints: (points: number) => void
}
