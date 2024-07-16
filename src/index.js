import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import reportWebVitals from './reportWebVitals'
import Footer from './components/Footer'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
