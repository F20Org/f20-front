import type { ButtonProps } from './types'

import { Container } from './styles'

export const Button = (props: ButtonProps) => {
  const { label, onClick } = props

  return <Container onClick={onClick}>{label}</Container>
}
