import { useEffect, useState } from 'react';
import { AppRouter } from './App-router';

function App() {
  const [theme, setTheme] = useState<string>('')
  
  useEffect(() => {
    document.addEventListener('theme-changed', (event: any) => {  setTheme(event.detail.theme) })
  }, [])

  return ( <AppRouter /> )
}

export default App
