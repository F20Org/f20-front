import { ListPage } from 'pages/Characters/ListPage'
import styled, { ThemeProvider } from 'styled-components'
import { themes } from './themes'
import { GlobalStyle } from 'themes/globalStyle'
import { Header } from 'components/Header'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <ListPage />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
