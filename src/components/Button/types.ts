import type { themes } from '@themes/'

export type ButtonProps = {
  label: string
  icon?: string
  onClick: () => void
  backgroundColor: keyof typeof themes.COLORS
}
