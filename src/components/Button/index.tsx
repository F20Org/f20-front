import type { ButtonProps } from './types'

import { Container } from './styles'

export const Button = (props: ButtonProps) => {
  const { label, onClick, backgroundColor, icon, ...rest } = props

  return (
    <Container backgroundColor={backgroundColor} onClick={onClick} {...rest}>
      {icon && <img src={icon} alt='button-icon' />}
      {label}
    </Container>
  )
}
