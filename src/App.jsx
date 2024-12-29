
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/navbar/Navbar'
import { Footer } from './Components/Footer/Footer'
import About from './Pages/About'
import Login from './Pages/Login'
import CreatePage from './Pages/CreatePage'
import { Products } from './Pages/Products'
import { DetailsPage } from './Pages/DetailsPage'

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
    </Routes>
  <Footer/>
    </BrowserRouter>
  
    </>
  )
}

export default App
