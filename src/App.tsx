import { ThemeProvider } from 'styled-components'
import { Bounce, ToastContainer } from 'react-toastify'

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
          <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme='light'
            transition={Bounce}
          />
          <GlobalStyle />
          <AppRoutes />
        </RollsContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
