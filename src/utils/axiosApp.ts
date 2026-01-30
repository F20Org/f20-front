import axios from 'axios'
import { notify } from './snackbar'

export const axiosApp = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosApp.interceptors.response.use(
  (response) => response,
  (error) => {
    notify(
      error.response?.data?.message || 'Erro na comunicação com o servidor',
      'error',
    )
    return Promise.reject(error)
  },
)

axiosApp.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
