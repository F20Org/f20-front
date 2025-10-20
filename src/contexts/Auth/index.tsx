import { createContext, useState } from 'react'
import type { AuthContextDataProps, AuthProviderProps } from './types'

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export const AuthContextProvider = (props: AuthProviderProps) => {
  const { children } = props

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const fetchLogin = async (email: string, password: string) => {
    setIsAuthenticated(true)
  }

  const signOut = () => {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        fetchLogin,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
