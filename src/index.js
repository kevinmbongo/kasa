import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import reportWebVitals from './reportWebVitals'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Location from './pages/Location'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Location/:idLocation" element={<Location />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)

reportWebVitals()
