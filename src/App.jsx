import { useState } from 'react'
import './App.css'
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './pages/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Wishlist from './pages/WishList';
import Mobile from './products/Mobile';
import Admin from './pages/Admin';
import Laptops from './products/Laptops';
import Headphones from './products/Headphones';
import Tv from './products/Tv';
import AllProducts from './products/AllProducts';
import AirPurifiers from './products/AirPurifiers';
import Grooming from './products/Grooming';



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={ <Landing/> }/>
      <Route path='/register' element={ <Register/> }/>
      <Route path='/login' element={ <Login/> }/>
      <Route path='/cart' element={ <Cart/> }/>
      <Route path='/wishlist' element={ <Wishlist/> }/>
      <Route path='/mobiles' element={ <Mobile/> }/>
      <Route path='/laptop' element={ <Laptops/> }/>
      <Route path='/headphones' element={ <Headphones/> }/>
      <Route path='/tv' element={ <Tv/> }/>
      <Route path='/allproducts' element={ <AllProducts/> }/>
      <Route path='/airpurifiers' element={ <AirPurifiers/> }/>
      <Route path='/grooming' element={ <Grooming/> }/>
      <Route path='/admin' element={ <Admin/> }/>

    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
