import { Routes, Route } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import CreateEntryForm from '../pages/CreateEntryForm'
import NotFound from '../pages/NotFound'
import Entry from '../components/Entry'
import { EntryInterface } from '../services/entriesService'
import {useState} from 'react'


const AppRoutes = () => {

  const [formData, setFormData] = useState<EntryInterface>({
    _id: '',
    title: '',
    text: '',
    imageUrl: 'something',
    tags: [],
    createdAt: new Date(),
  })
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/home" element={<Home />} />
      <Route path="/form" element={<CreateEntryForm formData={formData} setFormData={setFormData}/>} />
      <Route path="/entry" element={<Entry />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
