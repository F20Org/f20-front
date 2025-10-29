import DiceIcon from 'assets/icons/dice.svg'
import BookIcon from 'assets/icons/magicBook.svg'
import MagicBall from 'assets/icons/magicBall.svg'
import BackpackIcon from 'assets/icons/backpack.svg'
import Paper from 'assets/icons/paper.svg'
import type { themes } from '@themes/'

type NavBarOption = {
  id: string
  label: string
  icon: string
  selectedColor: keyof typeof themes.COLORS
}

export const NAV_BAR_OPTIONS: NavBarOption[] = [
  {
    id: 'rolls',
    label: 'Rolagens',
    icon: DiceIcon,
    selectedColor: 'RED_PRIMARY_COLOR',
  },
  {
    id: 'skills',
    label: 'Habilidades',
    icon: BookIcon,
    selectedColor: 'YELLOW_PRIMARY_COLOR',
  },
  {
    id: 'spells',
    label: 'Magias',
    icon: MagicBall,
    selectedColor: 'DARK_BLUE_PRIMARY_COLOR',
  },
  {
    id: 'inventory',
    label: 'Inventário',
    icon: BackpackIcon,
    selectedColor: 'BROWN_PRIMARY_COLOR',
  },
  {
    id: 'description',
    label: 'Descrição',
    icon: Paper,
    selectedColor: 'YELLOW_PRIMARY_COLOR',
  },
]
