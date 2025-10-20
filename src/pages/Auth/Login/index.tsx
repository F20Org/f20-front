import { Button } from 'components/Button'
import { Input } from 'components/Input'

import { FormContainer, ImageContainer, LoginContainer } from './styles'

export const Login = () => {
  return (
    <LoginContainer>
      <ImageContainer />
      <FormContainer>
        <form>
          <h1>Login</h1>
          <Input label='Email' placeholder='Digite seu email...' type='email' />
          <Input
            label='Senha'
            placeholder='Digite sua senha...'
            type='password'
          />
          <Button label='Entrar' onClick={() => {}} />
        </form>
      </FormContainer>
    </LoginContainer>
  )
}
