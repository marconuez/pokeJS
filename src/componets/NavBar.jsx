import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavStyle.css'

export const NavBar = () => {
  const [cambia, setCambia] = useState(false);


  const cambiacolor = () => {
    setCambia(!cambia);
  }
  return (
    <nav className={cambia ? 'nav nav-color-white' : 'nav nav-color-black'}>
        <ul className='flexiNav'>
            <li className='elis'><Link className={cambia ? ' nav-color-white opciones-black' : ' nav-color-black opciones'} to="/">Home</Link></li>
            <li className='elis'><Link className={cambia ? ' nav-color-white opciones-black' : ' nav-color-black opciones'} to="/about">About</Link></li>
            <li className='elis'><Link className={cambia ? ' nav-color-white opciones-black' : ' nav-color-black opciones'} to="/pokedex">Pokedex</Link></li>
        </ul>
        <button onClick={() => cambiacolor()}>DarkMode</button>
    </nav>
  )
}
