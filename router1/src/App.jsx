import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Allrout from './pages/Allrout'
import Navbar from './componants/Navbar'

const App = () => {
  return (

    <div>
         <Navbar/>
        <Allrout/>
      


    </div>
    

  )
}

export default App