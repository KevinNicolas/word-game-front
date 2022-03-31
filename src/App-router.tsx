import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Auth, Home } from '@views'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
