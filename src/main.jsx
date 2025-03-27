import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Recipes from './Pages/Recipes'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <NameContext.Provider value={}></NameContext.Provider> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Recipes" element={<Recipes />} />
      <Route path="/Recipes/:id" element={<Recipes/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
)
