import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavStyle.css'

export const NavBar = () => {
  return (
    <nav className='nav'>
        <ul className='flexiNav'>
            <li className='elis'><Link className='opciones' to="/">Home</Link></li>
            <li className='elis'><Link className='opciones' to="/about">About</Link></li>
            <li className='elis'><Link className='opciones' to="/pokedex">Pokedex</Link></li>
        </ul>
    </nav>
  )
}
