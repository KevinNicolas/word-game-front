import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { useTheme } from './hooks/useTheme'
import { GlobalStyle, DarkTheme, LightTheme } from './assets/styles'

const Main = () => {
  const [theme, toggleTheme] = useTheme()
  document.addEventListener('toggle-theme', toggleTheme)
  return (
    <>
      <GlobalStyle />
      {
        theme === 'dark'
          ? <DarkTheme />
          : <LightTheme />
      }
      <App />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
)
