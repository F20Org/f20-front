import type { themes } from '@themes/'

export type SearchInputProps = {
  placeholder: string
  icon: string
  handleClick: () => void
  setSearchInput: (value: string) => void
  searchInput: string
  buttonColor: keyof typeof themes.COLORS
  buttonText: string
}
