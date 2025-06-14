import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Recipes from './Pages/Recipes'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Recipe from './Pages/Recipe'
import { BrowserRouter, Route, Routes } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      
    </Routes>
  </BrowserRouter>

  </StrictMode>
)
