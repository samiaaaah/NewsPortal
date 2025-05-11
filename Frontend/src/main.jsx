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
import Dashboard from './Admin/Dashboard.jsx'



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
        <Route path="/admin" element={<Dashboard/>}/>
        </Route>

    </Routes>
    </BrowserRouter>
  </StrictMode>
)
