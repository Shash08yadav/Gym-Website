import React from 'react'
import {Link} from 'react-router-dom'
import './styles/nav.css'
const Nav = () => {
  return (
   
    <div className='navbar'>
        <div className='logo'>
          <Link  className="under" to="/">
          <h1>FITNASE</h1>
        </Link>
       
        </div>
        <div className='navbox'>
            <ul>
              
                <li className='llii'><div><Link className="ll" to="Membership">Membership</Link></div></li>
                <li className='llii'><div><Link className="ll" to ="Blog">Blog</Link></div></li>
                <li className='llii'><div><Link className="ll" to ="Gallery">Gallery</Link></div></li>
                <li className='llii'><div><Link className="ll" to="Registration">Registration</Link></div></li>
            </ul>
        </div>
    </div>
   
    
  )
}

export default Nav