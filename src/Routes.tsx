import { useContext } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { AuthContext } from 'contexts/Auth'

import { Login } from 'pages/Auth/Login'
import { ListPage } from 'pages/Characters/ListPage'

import { Header } from 'components/Header'
import { Home } from 'pages/Home'
import { DetailsPage } from 'pages/Characters/DetailsPage'

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
            element={<Navigate to={isAuthenticated ? '/home' : '/login'} />}
          />

          <Route path='/login' element={<Login />} />

          <Route path='/home' element={<Home />} />

          <Route path='/characters' element={<ListPage />} />

          <Route path='/characters/:id' element={<DetailsPage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  )
}
