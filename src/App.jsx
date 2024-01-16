import { useState } from 'react'
import './App.css'
import Nav from './component/Nav/Nav'
import Header from './component/Header/Header'
import About from './component/About/About'
import Footer from './component/Footer/Footer'
import Prices from './component/Prices/Prices'
import Contact from './component/Contact/Contact'


function App() {

  return (
    <div id='appParent'>
      <Nav/>
      <Header/>
      <About/>
      <Prices/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
