import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import India from './Pages/India.jsx'
import World from './Pages/World.jsx'
import Business from './Pages/Business.jsx'
import Sports from './Pages/Sports.jsx'
import Login from './Pages/Login.jsx'
import Admin from './Admin/Admin.jsx'
import Layout2 from './Admin/components/Layout.jsx'
import Category from './Admin/pages/Category.jsx'
import NewsAll from './Admin/pages/NewsAll.jsx'
import AddNews from './Admin/pages/AddNews.jsx'
import AddCategory from './Admin/pages/AddCategory.jsx'
import UpdateNews from './Admin/pages/UpdateNews.jsx'
import ProtectedRoute from './Admin/components/ProtectedRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/India" element={<India />} />
        <Route path="/World" element={<World/>} />
        <Route path="/Business" element={<Business/>}/>
        <Route path="/Sports" element={<Sports/>}/>
        <Route path="/Login" element={<Login/>}/>
        </Route>

        <Route path="/admin" element={<ProtectedRoute><Layout2 /></ProtectedRoute>}>

        <Route index element={<Admin/>}/>
          <Route path="category" element={<Category />} />
          <Route path="news" element={<NewsAll />} />
          <Route path="addNews" element={<AddNews />} />
          <Route path="addCategory" element={<AddCategory />} />
          <Route path="news/:id" element={<UpdateNews />} />
        </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
