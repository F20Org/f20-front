import { useContext } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { AuthContext } from 'contexts/Auth'

import { Home } from 'pages/Home'
import { Login } from 'pages/Auth/Login'
import { ListPage } from 'pages/Characters/ListPage'
import { DetailsPage } from 'pages/Characters/DetailsPage'

import { Header } from 'components/Header'
import { RollsSection } from 'pages/Characters/DetailsPage/components/RightSection/components/RollsSection'
import { SkillsSection } from 'pages/Characters/DetailsPage/components/RightSection/components/SkillsSection'
import { SpellsSection } from 'pages/Characters/DetailsPage/components/RightSection/components/SpellsSection'
import { InventorySection } from 'pages/Characters/DetailsPage/components/RightSection/components/InventorySection'
import { DescriptionSection } from 'pages/Characters/DetailsPage/components/RightSection/components/DescriptionSection'
import { Register } from 'pages/Auth/Register'

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
          <Route path='/register' element={<Register />} />

          <Route path='/home' element={<Home />} />

          <Route path='/characters' element={<ListPage />} />

          <Route path='/characters/:id' element={<DetailsPage />}>
            <Route path='/characters/:id/rolls' element={<RollsSection />} />
            <Route path='/characters/:id/skills' element={<SkillsSection />} />
            <Route path='/characters/:id/spells' element={<SpellsSection />} />
            <Route
              path='/characters/:id/inventory'
              element={<InventorySection />}
            />
            <Route
              path='/characters/:id/description'
              element={<DescriptionSection />}
            />
          </Route>
        </Routes>
      </AppContainer>
    </BrowserRouter>
  )
}
