import { useState, useEffect } from "react"

export const useTheme = (): [string, () => void] => {
  const [theme, settheme] = useState<string>('dark')

  const toggleTheme = () => { 
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    settheme(newTheme)
  }

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem('theme');
    const prefersDark: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme && ['dark', 'light'].includes(savedTheme)) { settheme(savedTheme) }
    else if (prefersDark) { settheme('dark'); localStorage.setItem('theme', 'dark') }

  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  useEffect(() => { document.dispatchEvent(new CustomEvent<{ theme: string }>('theme-changed', { detail: { theme } })) })

  return [ theme, toggleTheme ]
}