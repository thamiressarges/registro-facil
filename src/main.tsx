import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Home} from './pages/Home'
import { SignIn } from './pages/SignIn/index.tsx'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.ts'
import GlobalStyle from './styles/global.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme} >
      <GlobalStyle/>
      <SignIn />
    </ThemeProvider>
  </StrictMode>,
)
