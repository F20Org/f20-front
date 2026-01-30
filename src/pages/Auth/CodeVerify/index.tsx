import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components/Button'

import {
  CodesInputsContainer,
  FormContainer,
  ImageContainer,
  LoginContainer,
} from './styles'
import { axiosApp } from 'utils/axiosApp'
import type { ResponseDTO } from 'dtos/ResponseDTO'
import type { UserDTO } from 'dtos/UserDTO'
import { notify } from 'utils/snackbar'
import { useAuthProvider } from 'contexts/Auth'

export const CodeVerify = () => {
  const { authUser, signOut } = useAuthProvider()

  const navigate = useNavigate()

  const codeFormik = useFormik({
    initialValues: {
      codeOne: '',
      codeTwo: '',
      codeThree: '',
      codeFour: '',
      codeFive: '',
      codeSix: '',
    },
    validationSchema: Yup.object({
      codeOne: Yup.number()
        .typeError('Deve ser um número')
        .required('Obrigatório'),
      codeTwo: Yup.number()
        .typeError('Deve ser um número')
        .required('Obrigatório'),
      codeThree: Yup.number()
        .typeError('Deve ser um número')
        .required('Obrigatório'),
      codeFour: Yup.number()
        .typeError('Deve ser um número')
        .required('Obrigatório'),
      codeFive: Yup.number()
        .typeError('Deve ser um número')
        .required('Obrigatório'),
      codeSix: Yup.number()
        .typeError('Deve ser um número')
        .required('Obrigatório'),
    }),
    onSubmit: async (values) => {
      try {
        const email =
          localStorage.getItem('emailForVerification') || authUser?.email || ''

        const response = await axiosApp.put<ResponseDTO<UserDTO>>(
          '/auth/verify-email',
          {
            code: `${values.codeOne}${values.codeTwo}${values.codeThree}${values.codeFour}${values.codeFive}${values.codeSix}`,
            email: email || '',
          },
        )

        if (response.data.status === 200) {
          notify('Código verificado realizado com sucesso!', 'success')

          signOut()

          localStorage.removeItem('emailForVerification')
          localStorage.removeItem('passwordForVerification')

          navigate('/login')
        } else {
          notify('Erro ao verificar código. Tente novamente.', 'error')
        }
      } catch (error) {
        notify('Erro ao verificar código. Tente novamente.', 'error')
      }
    },
  })

  return (
    <LoginContainer>
      <ImageContainer />
      <FormContainer>
        <form onSubmit={codeFormik.handleSubmit}>
          <h1>Verificar Código</h1>
          <CodesInputsContainer>
            {[
              'codeOne',
              'codeTwo',
              'codeThree',
              'codeFour',
              'codeFive',
              'codeSix',
            ].map((code, index) => (
              <input
                key={index}
                name={code}
                type='number'
                maxLength={1}
                onBlur={codeFormik.handleBlur}
                value={
                  codeFormik.values[code as keyof typeof codeFormik.values]
                }
                onChange={codeFormik.handleChange}
              />
            ))}
          </CodesInputsContainer>
          <Button
            type='submit'
            backgroundColor='RED_PRIMARY_COLOR'
            label='Verificar'
            onClick={() => codeFormik.handleSubmit()}
          />
        </form>
      </FormContainer>
    </LoginContainer>
  )
}
