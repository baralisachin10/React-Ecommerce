import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
const MyRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='/cart' Component={CartPage}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRouter