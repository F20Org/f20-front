import type { ResponseDTO } from 'dtos/ResponseDTO'
import type { UserDTO } from 'dtos/UserDTO'

export type AuthContextDataProps = {
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUser | undefined>>
  authUser: AuthUser | undefined
  isAuthenticated: boolean
  fetchLogin: (email: string, password: string) => Promise<ResponseDTO<string>>
  signOut: () => void
}

export type AuthProviderProps = {
  children: React.ReactNode
}

export type AuthUser = Pick<UserDTO, 'username' | 'email'> & {
  emailVerified: boolean
}
