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
    <BrowserRouter basename='/f20-front'>
      <AppContainer>
        {isAuthenticated && <Header />}
        <Routes>
          <Route
            path='/'
            element={
              <Navigate to={isAuthenticated ? '/characters' : '/login'} />
            }
          />

          <Route path='/login' element={<Login />} />

          <Route path='/characters' element={<ListPage />} />

          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  )
}
