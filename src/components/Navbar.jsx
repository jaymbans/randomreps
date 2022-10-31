import React, { useContext } from 'react'
import '../App.css'
import QuickCreate from '../components/QuickCreate/QuickCreate';
import CustomWorkout from '../components/CustomWorkout/CustomWorkout';
import Favorites from '../components/Favorites';
import Logo from './Logo';

function Navbar() {

  return (
    <div className='nav'>
      <div className="navbar-left">
        <Logo />
      </div>
      <div className="navbar-right">
        <QuickCreate />
        <CustomWorkout />
        <Favorites />
      </div>
    </div>
  )
}

export default Navbar