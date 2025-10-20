import * as IoIcons from 'react-icons/io5'

import type { IconProps } from './types'

import { themes } from 'themes/'
import { Container } from './styles'

export const Icon = (props: IconProps) => {
  const { name, size, color } = props

  const IconComponent =
    IoIcons[name as keyof typeof IoIcons] || IoIcons.IoLogoBitcoin

  return (
    <Container>
      <IconComponent size={size} color={themes.COLORS[color]} />
    </Container>
  )
}
