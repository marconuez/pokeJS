import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'
import { Pokedex } from '../pages/Pokedex'
import { NavBar } from '../componets/NavBar'

export const AppRouter = () => {
  return (
    <>
    <NavBar/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={ <AboutPage />} />
            <Route path="/pokedex" element={ <Pokedex />} />
        </Routes>
    </>
  )
}
