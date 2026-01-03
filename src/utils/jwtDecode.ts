import { jwtDecode } from 'jwt-decode'

export const JWTdecoder = (token: string) => {
  try {
    return jwtDecode(token)
  } catch (error) {
    console.log(error)
  }
}
