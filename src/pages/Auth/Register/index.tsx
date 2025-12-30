import { useNavigate } from 'react-router-dom'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

import { FormContainer, ImageContainer, LoginContainer } from './styles'
import { useFormik } from 'formik'

export const Register = () => {
  const navigate = useNavigate()

  const registerFormik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async (values) => {
      console.log({ values })
    },
  })

  return (
    <LoginContainer>
      <ImageContainer />
      <FormContainer>
        <form onSubmit={registerFormik.handleSubmit}>
          <h1>Cadastrar</h1>
          <Input
            name='name'
            type='text'
            label='Nome'
            placeholder='Digite seu nome...'
            value={registerFormik.values.name}
            onChange={registerFormik.handleChange}
          />
          <Input
            name='email'
            type='email'
            label='Email'
            placeholder='Digite seu email...'
            value={registerFormik.values.email}
            onChange={registerFormik.handleChange}
          />
          <Input
            label='Senha'
            name='password'
            type='password'
            placeholder='Digite sua senha...'
            value={registerFormik.values.password}
            onChange={registerFormik.handleChange}
          />
          <Input
            type='password'
            name='confirmPassword'
            label='Confirmar Senha'
            onChange={registerFormik.handleChange}
            placeholder='Digite sua senha novamente...'
            value={registerFormik.values.confirmPassword}
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
