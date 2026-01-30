import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

import { FormContainer, ImageContainer, LoginContainer } from './styles'
import { axiosApp } from 'utils/axiosApp'
import type { ResponseDTO } from 'dtos/ResponseDTO'
import type { UserDTO } from 'dtos/UserDTO'
import { notify } from 'utils/snackbar'

export const Register = () => {
  const navigate = useNavigate()

  const registerFormik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Nome deve ter pelo menos 3 caracteres')
        .required('Nome é obrigatório'),
      email: Yup.string()
        .email('Email inválido')
        .required('Email é obrigatório'),
      password: Yup.string()
        .min(6, 'Senha deve ter pelo menos 6 caracteres')
        .required('Senha é obrigatória'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'As senhas não coincidem')
        .required('Confirmação de senha é obrigatória'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axiosApp.post<ResponseDTO<UserDTO>>(
          '/auth/register',
          {
            username: values.name,
            email: values.email,
            password: values.password,
          },
        )

        if (response.data.status === 201) {
          localStorage.setItem('emailForVerification', values.email)

          notify('Cadastro realizado com sucesso!', 'success')

          navigate('/register/verify-code')
        } else {
          notify('Erro ao realizar cadastro. Tente novamente.', 'error')
        }
      } catch (error) {
        notify('Erro ao realizar cadastro. Tente novamente.', 'error')
      }
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
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.name}
            onChange={registerFormik.handleChange}
            hasError={
              !!registerFormik.errors.name && registerFormik.touched.name
            }
            errorText={registerFormik.errors.name}
          />
          <Input
            name='email'
            type='email'
            label='Email'
            placeholder='Digite seu email...'
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.email}
            onChange={registerFormik.handleChange}
            hasError={
              !!registerFormik.errors.email && registerFormik.touched.email
            }
            errorText={registerFormik.errors.email}
          />
          <Input
            label='Senha'
            name='password'
            type='password'
            placeholder='Digite sua senha...'
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.password}
            onChange={registerFormik.handleChange}
            hasError={
              !!registerFormik.errors.password &&
              registerFormik.touched.password
            }
            errorText={registerFormik.errors.password}
          />
          <Input
            type='password'
            name='confirmPassword'
            label='Confirmar Senha'
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            placeholder='Digite sua senha novamente...'
            value={registerFormik.values.confirmPassword}
            hasError={
              !!registerFormik.errors.confirmPassword &&
              registerFormik.touched.confirmPassword
            }
            errorText={registerFormik.errors.confirmPassword}
          />
          <Button
            backgroundColor='RED_PRIMARY_COLOR'
            label='Cadastrar'
            onClick={() => registerFormik.handleSubmit()}
          />
        </form>
        <p>
          Ja possui uma conta? <a onClick={() => navigate('/login')}>Entrar</a>
        </p>
      </FormContainer>
    </LoginContainer>
  )
}
