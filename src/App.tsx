import { useEffect, useState } from 'react';
import { Home } from '@views';

function App() {
  const [theme, setTheme] = useState<string>('')
  
  useEffect(() => {
    document.addEventListener('theme-changed', (event: any) => {  setTheme(event.detail.theme) })
  }, [])

  return ( <Home /> )
}

export default App
