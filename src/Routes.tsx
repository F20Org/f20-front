import styled from 'styled-components'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { useAuthProvider } from 'contexts/Auth'

import { Home } from 'pages/Home'
import { Login } from 'pages/Auth/Login'
import { ListPage } from 'pages/Characters/ListPage'
import { DetailsPage } from 'pages/Characters/DetailsPage'

import { Header } from 'components/Header'
import { Register } from 'pages/Auth/Register'
import { RollsSection } from 'pages/Characters/DetailsPage/components/RightSection/components/RollsSection'
import { SkillsSection } from 'pages/Characters/DetailsPage/components/RightSection/components/SkillsSection'
import { SpellsSection } from 'pages/Characters/DetailsPage/components/RightSection/components/SpellsSection'
import { InventorySection } from 'pages/Characters/DetailsPage/components/RightSection/components/InventorySection'
import { DescriptionSection } from 'pages/Characters/DetailsPage/components/RightSection/components/DescriptionSection'
import { CodeVerify } from 'pages/Auth/CodeVerify'
import { PrivateRoute } from 'components/PrivateRoute'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const AppRoutes = () => {
  const { isAuthenticated, authUser } = useAuthProvider()

  return (
    <BrowserRouter basename='/f20-front'>
      <AppContainer>
        {isAuthenticated && <Header />}
        <Routes>
          <Route
            path='/'
            element={<Navigate to={isAuthenticated ? '/home' : '/login'} />}
          />

          <Route
            path='/login'
            element={isAuthenticated ? <Navigate to='/home' /> : <Login />}
          />
          <Route
            path='/register'
            element={isAuthenticated ? <Navigate to='/home' /> : <Register />}
          />
          <Route
            path='/register/verify-code'
            element={
              isAuthenticated && authUser?.emailVerified ? (
                <Navigate to='/home' />
              ) : (
                <CodeVerify />
              )
            }
          />

          <Route
            path='/home'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path='/characters'
            element={
              <PrivateRoute>
                <ListPage />
              </PrivateRoute>
            }
          />

          <Route
            path='/characters/:id'
            element={
              <PrivateRoute>
                <DetailsPage />
              </PrivateRoute>
            }
          >
            <Route
              path='/characters/:id/rolls'
              element={
                <PrivateRoute>
                  <RollsSection />
                </PrivateRoute>
              }
            />
            <Route
              path='/characters/:id/skills'
              element={
                <PrivateRoute>
                  <SkillsSection />
                </PrivateRoute>
              }
            />
            <Route
              path='/characters/:id/spells'
              element={
                <PrivateRoute>
                  <SpellsSection />
                </PrivateRoute>
              }
            />
            <Route
              path='/characters/:id/inventory'
              element={
                <PrivateRoute>
                  <InventorySection />
                </PrivateRoute>
              }
            />
            <Route
              path='/characters/:id/description'
              element={
                <PrivateRoute>
                  <DescriptionSection />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </AppContainer>
    </BrowserRouter>
  )
}
