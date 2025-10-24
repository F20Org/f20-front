import type { OptionCardProps } from './types'

import {
  OptionCardContainer,
  OptionDescription,
  OptionIcon,
  OptionTitle,
} from './styles'

export const OptionCard = (props: OptionCardProps) => {
  const { icon, title, description, onClick } = props

  return (
    <OptionCardContainer onClick={onClick}>
      <OptionIcon src={icon} alt={title} />
      <OptionTitle>{title}</OptionTitle>
      <OptionDescription>{description}</OptionDescription>
    </OptionCardContainer>
  )
}
