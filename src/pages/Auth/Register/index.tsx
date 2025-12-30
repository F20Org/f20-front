import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from 'contexts/Auth'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

import { FormContainer, ImageContainer, LoginContainer } from './styles'

export const Register = () => {
  const { fetchLogin } = useContext(AuthContext)

  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await fetchLogin('', '')

    navigate('/home')
  }

  return (
    <LoginContainer>
      <ImageContainer />
      <FormContainer>
        <form onSubmit={onSubmit}>
          <h1>Cadastrar</h1>
          <Input label='Nome' placeholder='Digite seu nome...' type='text' />
          <Input label='Email' placeholder='Digite seu email...' type='email' />
          <Input
            label='Senha'
            placeholder='Digite sua senha...'
            type='password'
          />
          <Input
            label='Confirmar Senha'
            placeholder='Digite sua senha novamente...'
            type='password'
          />
          <Button
            backgroundColor='RED_PRIMARY_COLOR'
            label='Cadastrar'
            onClick={() => {}}
          />
        </form>
        <p>
          Ja possui uma conta? <a onClick={() => navigate('/login')}>Entrar</a>
        </p>
      </FormContainer>
    </LoginContainer>
  )
}
