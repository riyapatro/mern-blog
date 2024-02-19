import React from 'react'
import {BrowserRouter , Routes, Route} from "react-router-dom"

// Importing pages
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signout from './pages/Signout'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'


const App = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signin' element={<Signin/>} />
    <Route path='/signout' element={<Signout/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/projects' element={<Projects/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
