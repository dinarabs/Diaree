import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import EntryForm from '../pages/EntryForm'
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/form' element={<EntryForm/>}/>
          <Route path='*' element={<NotFound/>}/>
    
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
