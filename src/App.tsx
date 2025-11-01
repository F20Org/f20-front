import { ThemeProvider } from 'styled-components'

import { themes } from './themes'
import { GlobalStyle } from 'themes/globalStyle'

import { AppRoutes } from './Routes'
import { AuthContextProvider } from 'contexts/Auth'
import { RollsContextProvider } from 'contexts/Rolls'

function App() {
  return (
    <ThemeProvider theme={themes}>
      <AuthContextProvider>
        <RollsContextProvider>
          <GlobalStyle />
          <AppRoutes />
        </RollsContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
