import { Routes, Route } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import CreateEntryForm from '../pages/CreateEntryForm'
import NotFound from '../pages/NotFound'
import Entry from '../components/Entry'

const AppRoutes = () => {
  return (
      <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>

          <Route path='/home' element={<Home/>}/>
          <Route path='/form' element={<CreateEntryForm/>}/>
          <Route path='/entry' element={<Entry/>}/>

          <Route path='*' element={<NotFound/>}/>
      </Routes>
  )
}

export default AppRoutes
