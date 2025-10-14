import React from 'react'
import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout.jsx'
import HeroSection from './pages/HeroSection.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import Register from './pages/Register.jsx'
import FamilyTree from './pages/FamilyTree.jsx'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HeroSection />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="familytree" element={<FamilyTree />} />
      </Route>
    </Routes>
  )
}

export default App