import React from 'react'
import "../Styles/nav.css"
import pkg from "../Data/data.json"
import { Link } from 'react-router-dom'
import Searchicon from '../Svgs/searchicon'

const logo=pkg.logo

const Navbar = ()=>{
  return (
    <div  className="nav">
        
          <div className='Logo'>
          <Link to="">
          <img id="logoimage" src={logo} alt='not'/>
          </Link>
          </div>

          <Link className ="navlinks" to="/miphones">Mi Phones</Link>
          <Link className ="navlinks" to="/redmimiphones">Redmi Phones</Link>
          <Link className ="navlinks" to="/tv">tv</Link>
          <Link className ="navlinks" to="/laptops">laptops</Link>
          <Link className ="navlinks" to="/audio">audio</Link>
          <Link className ="navlinks" to="/accessories">accessories</Link>
          
          
          <div className="Searchbox"> 
            <input type="text" name='search' placeholder="Search Products"/>{Searchicon}
          </div>          
          
          </div>

  
  )
}
export default Navbar