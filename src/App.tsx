import { ThemeProvider } from 'styled-components'

import { themes } from './themes'
import { GlobalStyle } from 'themes/globalStyle'

import { AppRoutes } from './Routes'
import { AuthContextProvider } from 'contexts/Auth'

function App() {
  return (
    <ThemeProvider theme={themes}>
      <AuthContextProvider>
        <GlobalStyle />
        <AppRoutes />
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
