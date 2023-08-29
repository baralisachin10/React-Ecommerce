import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/cart' Component={CartPage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/register' Component={RegisterPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRouter