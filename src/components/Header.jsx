import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import QuickCreate from './QuickCreate/QuickCreate'
import mainControllerContext from '../Context/MainControllerContext'

function Header() {

  return (
    <>
      <Navbar />
      <section className='header title'>
        <h1 className='title'>Welcome to Random Reps</h1>
        <p className='title'>...where random reaps results</p>
      </section>
    </>
  )
}

export default Header