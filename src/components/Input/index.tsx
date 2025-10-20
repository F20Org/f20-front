import InputIcon from 'assets/images/inputIcon.svg'

import type { InputProps } from './types'

import { Container, InputContainer } from './styles'

export const Input = (props: InputProps) => {
  const { label, placeholder, type } = props

  return (
    <Container>
      <label>{label}</label>
      <InputContainer>
        <img src={InputIcon} alt='Input Icon' />
        <input type={type} placeholder={placeholder} />
      </InputContainer>
    </Container>
  )
}
