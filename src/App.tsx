import { ListPage } from 'pages/Characters/ListPage'
import { ThemeProvider } from 'styled-components'
import { themes } from './themes'
import { GlobalStyle } from 'themes/globalStyle'

function App() {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <ListPage />
    </ThemeProvider>
  )
}

export default App
