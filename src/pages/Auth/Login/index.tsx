import { Button } from 'components/Button'
import { Input } from 'components/Input'

import { FormContainer, ImageContainer, LoginContainer } from './styles'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    navigate('/f20-front/characters')
  }

  return (
    <LoginContainer>
      <ImageContainer />
      <FormContainer>
        <form onSubmit={onSubmit}>
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
