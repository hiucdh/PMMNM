import React from 'react'
import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import HeroSection from './pages/HeroSection'
import About from './pages/About'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HeroSection />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App