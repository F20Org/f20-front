import { useFormik } from 'formik'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from 'contexts/Auth'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

import { FormContainer, ImageContainer, LoginContainer } from './styles'

export const Login = () => {
  const { fetchLogin } = useContext(AuthContext)

  const navigate = useNavigate()

  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await fetchLogin(values.email, values.password)

      navigate('/home')
    },
  })

  return (
    <LoginContainer>
      <ImageContainer />
      <FormContainer>
        <form onSubmit={loginFormik.handleSubmit}>
          <h1>Login</h1>
          <Input
            name='email'
            label='Email'
            value={loginFormik.values.email}
            onChange={loginFormik.handleChange}
            placeholder='Digite seu email...'
            type='email'
          />
          <Input
            name='password'
            label='Senha'
            value={loginFormik.values.password}
            onChange={loginFormik.handleChange}
            placeholder='Digite sua senha...'
            type='password'
          />
          <Button
            backgroundColor='RED_PRIMARY_COLOR'
            label='Entrar'
            onClick={() => {}}
          />
        </form>
        <p>
          Não possui uma conta?{' '}
          <a onClick={() => navigate('/register')}>Cadastre-se</a>
        </p>
      </FormContainer>
    </LoginContainer>
  )
}
