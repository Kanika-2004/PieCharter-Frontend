import { useState } from 'react'
import Home from './pages/Home'
import {Route,Routes} from 'react-router-dom'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'
import NotFound from './pages/NotFound'
import AddProduct from './admin/AddProduct'
import ProductDetails from './pages/Products/ProductDetails'
import CartDetails from './pages/cart/CartDetails'
import RequireAuth from './components/auth/RequireAuth'
import Order from './pages/orders/Order'
import OrderSuccess from './pages/orders/OrderSuccess'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/auth/signup' element={<Signup/>} />
        <Route path='/auth/login' element={<Login/>} />
        <Route path='/admin/addproduct' element={<AddProduct/>} />
        <Route path='/product/:productid' element={<ProductDetails/>} />
     
        <Route path='/cart' element={<CartDetails/>} />
        <Route path='/order' element={<Order />} />
        <Route path='/order/success' element={<OrderSuccess />} />
     
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
