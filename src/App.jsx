import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/project/Navbar'
import { Home } from './components/project/Home'
import { About } from './components/project/About'
import { Product } from './components/project/Product'
import { Cart } from './components/project/Cart'
import { Men } from './components/project/Men'

function App() {
  const[cartdatapass,setCartdatapass] = useState([])

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route element={<Navbar></Navbar>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/men' element={<Men cartdatapass={cartdatapass} setCartdatapass={setCartdatapass}></Men>}></Route>
        <Route path='/product' element={<Product cartdatapass={cartdatapass} setCartdatapass={setCartdatapass}></Product>}></Route>
        <Route path='/cart' element={<Cart cartdatapass={cartdatapass} setCartdatapass={setCartdatapass}></Cart>}></Route>
      </Route>  
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
