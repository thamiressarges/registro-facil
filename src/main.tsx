import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Details} from './pages/Details/index.tsx'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme} >
      <Details />
    </ThemeProvider>
  </StrictMode>,
)
