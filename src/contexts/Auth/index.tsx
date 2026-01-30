import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import type { AuthContextDataProps, AuthProviderProps, AuthUser } from './types'
import { axiosApp } from 'utils/axiosApp'
import type { ResponseDTO } from 'dtos/ResponseDTO'
import { JWTdecoder } from 'utils/jwtDecode'
import {
  getAuthDataStorage,
  removeAuthDataStorage,
  saveAuthDataStorage,
} from './../../storage/storage'

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export const AuthContextProvider = (props: AuthProviderProps) => {
  const { children } = props

  const [authUser, setAuthUser] = useState<AuthUser>()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const persistAuthUser = useCallback((data: string) => {
    const jwtDecoded = JWTdecoder(data)

    if (jwtDecoded) {
      const { sub, name, emailVerified } = jwtDecoded as {
        sub: string
        name: string
        emailVerified: boolean
      }

      const userData: AuthUser = {
        email: sub,
        username: name,
        emailVerified,
      }

      setAuthUser(userData)

      axiosApp.defaults.headers.common.Authorization = `Bearer ${data}`
      saveAuthDataStorage({
        token: data,
      })
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  const fetchLogin = useCallback(
    async (email: string, password: string) => {
      const response = await axiosApp.post<ResponseDTO<string>>('/auth/login', {
        email,
        password,
      })

      const { data } = response.data

      persistAuthUser(data)

      return response.data
    },
    [persistAuthUser],
  )

  const signOut = useCallback(() => {
    removeAuthDataStorage()
    setIsAuthenticated(false)
    setAuthUser(undefined)

    axiosApp.defaults.headers.common.Authorization = undefined
  }, [])

  const loadUserData = useCallback(() => {
    const data = getAuthDataStorage()

    if (!data) return

    persistAuthUser(data.token)
  }, [persistAuthUser])

  useEffect(() => {
    loadUserData()
  }, [loadUserData])

  return (
    <AuthContext.Provider
      value={{
        setAuthUser,
        authUser,
        isAuthenticated,
        fetchLogin,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthProvider = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(
      'useAuthContextProvider must be used within AuthContextProvider',
    )
  }

  return context
}
