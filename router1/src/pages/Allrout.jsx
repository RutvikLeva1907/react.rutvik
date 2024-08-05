import React from 'react'
import Home from './Home'
import About from './About'
import Contect from './Contect'
import Login from './Login'
import Signup from './Signup'
import { Route, Routes } from 'react-router-dom'

const Allrout = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contect/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />

        </Routes>
    </div>
  )
}

export default Allrout