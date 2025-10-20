import { useContext } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { AuthContext } from 'contexts/Auth'

import { Login } from 'pages/Auth/Login'
import { ListPage } from 'pages/Characters/ListPage'

import { Header } from 'components/Header'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <AppContainer>
      {isAuthenticated && <Header />}
      <BrowserRouter>
        <Routes>
          <Route
            path='/f20-front'
            element={
              <Navigate
                to={
                  isAuthenticated ? '/f20-front/characters' : '/f20-front/login'
                }
              />
            }
          />

          <Route path='/f20-front/login' element={<Login />} />

          <Route path='/f20-front/characters' element={<ListPage />} />

          <Route
            path='/f20-front/*'
            element={<Navigate to='/f20-front/login' />}
          />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}
