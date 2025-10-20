import type { themes } from '@themes/'

export type IconProps = {
  name: string
  size: string
  color: keyof typeof themes.COLORS
}
