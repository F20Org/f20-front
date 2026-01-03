type AuthObject = {
  token: string
}

const AUTH_STORAGE = '@f20:auth'

export const saveAuthDataStorage = (data: AuthObject) => {
  localStorage.setItem(AUTH_STORAGE, JSON.stringify(data))
}

export const getAuthDataStorage = () => {
  try {
    const data = localStorage.getItem(AUTH_STORAGE)

    if (!data) return null

    const dataParsed = JSON.parse(data) as AuthObject

    return dataParsed
  } catch (error) {
    console.log('getAuthDataStorage: ', error)

    return null
  }
}

export const removeAuthDataStorage = () => {
  localStorage.removeItem(AUTH_STORAGE)
}
