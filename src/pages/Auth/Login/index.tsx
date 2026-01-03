import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

import { FormContainer, ImageContainer, LoginContainer } from './styles'
import { notify } from 'utils/snackbar'
import { useAuthProvider } from 'contexts/Auth'

export const Login = () => {
  const { fetchLogin } = useAuthProvider()

  const navigate = useNavigate()

  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email inválido')
        .required('Email é obrigatório'),
      password: Yup.string()
        .min(6, 'Senha deve ter pelo menos 6 caracteres')
        .required('Senha é obrigatória'),
    }),
    onSubmit: async (values) => {
      const response = await fetchLogin(values.email, values.password)

      if (response.status === 200) {
        notify('Login realizado com sucesso!', 'success')
        navigate('/home')
      } else {
        notify('Erro ao realizar login. Verifique suas credenciais.', 'error')
      }
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
            type='email'
            onBlur={loginFormik.handleBlur}
            value={loginFormik.values.email}
            onChange={loginFormik.handleChange}
            placeholder='Digite seu email...'
            hasError={!!loginFormik.errors.email && loginFormik.touched.email}
            errorText={loginFormik.errors.email}
          />
          <Input
            label='Senha'
            name='password'
            type='password'
            onBlur={loginFormik.handleBlur}
            value={loginFormik.values.password}
            onChange={loginFormik.handleChange}
            placeholder='Digite sua senha...'
            hasError={
              !!loginFormik.errors.password && loginFormik.touched.password
            }
            errorText={loginFormik.errors.password}
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
