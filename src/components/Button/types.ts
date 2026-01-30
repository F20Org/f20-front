import type { themes } from '@themes/'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  icon?: string
  onClick: () => void
  backgroundColor: keyof typeof themes.COLORS
}
