import { ThemeProvider } from 'styled-components'

import { themes } from './themes'
import { GlobalStyle } from 'themes/globalStyle'

import { AppRoutes } from './Routes'

function App() {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
