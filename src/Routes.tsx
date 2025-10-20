import styled from 'styled-components'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

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
  return (
    <AppContainer>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path='/f20-front'
            element={<Navigate to='/f20-front/login' />}
          />

          <Route path='/f20-front/login' element={<Login />} />

          <Route path='/f20-front/characters' element={<ListPage />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}
