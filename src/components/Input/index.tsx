import InputIcon from 'assets/images/inputIcon.svg'

import type { InputProps } from './types'

import { Container, InputContainer } from './styles'

export const Input = (props: InputProps) => {
  const { label, placeholder, type, hasError, errorText, ...rest } = props

  return (
    <Container>
      <label>{label}</label>
      <InputContainer hasError={hasError}>
        <img src={InputIcon} alt='Input Icon' />
        <input type={type} placeholder={placeholder} {...rest} />
      </InputContainer>
      {hasError && <span>{errorText}</span>}
    </Container>
  )
}
