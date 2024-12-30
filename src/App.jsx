import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import { Footer } from './Components/Footer/Footer'
import About from './Pages/About'
import Login from './Pages/Login'
import CreatePage from './Pages/CreatePage'
import { Products } from './Pages/Products'
import { DetailsPage } from './Pages/DetailsPage'
import { Contact } from './Pages/Contact'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/create-page" element={<CreatePage/>} />
      <Route path="/category/:category" element={<Products/>} />
      <Route path="/detailspage" element={<DetailsPage/>} />
      <Route path="/contactpage" element={<Contact/>} />
      <Route path="*" element={<h1 className='text-center justify-center'>404 Page Not Found</h1>} />
    </Routes>
  <Footer/>
    </BrowserRouter>
  
    </>
  )
}

export default App
