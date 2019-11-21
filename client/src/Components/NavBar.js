import React from 'react'
import {Link} from 'react-router-dom'

import '../styles/navbar.css'


const NavBar = () => {
return(
    <div className='nav-container'>
    <Link className='navlink' to='/'>Home</Link>
    <Link className='navlink' to='/login'>Login</Link>
    <Link className='navlink' to='/register'>Sign-up</Link>
    <Link className='navlink' to='/home'>Play</Link>
    </div>
)
}


export default NavBar