import { useAuthProvider } from 'contexts/Auth'
import { Navigate, useLocation } from 'react-router-dom'
import type { PrivateRouteProps } from './types'
import { axiosApp } from 'utils/axiosApp'

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { children } = props

  const { authUser, isAuthenticated } = useAuthProvider()

  const location = useLocation()

  if (!authUser || !isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  if (authUser?.emailVerified === false) {
    console.log('Email not verified', authUser)

    axiosApp.post('auth/resend-verification-email', {
      email: authUser.email,
    })

    return (
      <Navigate to='/register/verify-code' state={{ from: location }} replace />
    )
  }

  console.log('PrivateRoute rendered', { authUser, isAuthenticated })

  return children
}
