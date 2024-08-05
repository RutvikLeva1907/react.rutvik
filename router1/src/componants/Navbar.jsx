import React from 'react'
import { Link } from 'react-router-dom'
// import './style.css'
import '../css/navbar.css'

const Navbar = () => {
  return (
    
    <div className='main'>
        <nav className='main1'>
            <ul className='nav'>

                <img src="https://www.freshrelevance.com/wp-content/uploads/2024/05/FR-by-Dotdigital-full-color.png" alt="" />
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li className='rd'>
                    <h4><Link to="/Login" >Login</Link></h4>
                </li>
                <li>
                    <h4><Link to="/Signup">Signup</Link></h4>
                </li>

                <div className='input1'>
                <input  type="search" placeholder='search aenythink' className='srs' />
                <button className='btn'>search</button>
                </div>
                
            </ul>
            
          
           
        </nav>

       
    </div>
  )
}


export default Navbar