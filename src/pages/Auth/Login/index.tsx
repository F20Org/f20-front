import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from 'contexts/Auth'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

import { FormContainer, ImageContainer, LoginContainer } from './styles'

export const Login = () => {
  const { fetchLogin } = useContext(AuthContext)

  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await fetchLogin('', '')

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
