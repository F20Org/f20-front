export type AuthContextDataProps = {
  isAuthenticated: boolean
  fetchLogin: (email: string, password: string) => Promise<void>
  signOut: () => void
}

export type AuthProviderProps = {
  children: React.ReactNode
}
