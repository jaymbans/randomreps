import '../App.css'
import QuickCreate from '../components/QuickCreate/QuickCreate';
import CustomWorkout from '../components/CustomWorkout/CustomWorkout';
import WorkoutList from '../components/WorkoutList';
import Logo from './Logo';
import { useState } from 'react';

function Navbar() {

  const activateHamburgerMenu = (e) => {
    const menu = document.querySelector('.navbar-right');

    let node = e.target;
    if (!Array.from(node.classList).includes('hamburger-menu')) {
      node = node.parentNode;
    }

    if (![...node.children[0].classList].includes('active')) {
      Array.from(node.children).forEach(child => child.classList.add('active'));
      menu.classList.add('active');
    } else {
      Array.from(node.children).forEach(child => child.classList.remove('active'))
      menu.classList.remove('active');
    }
  }


  return (
    <div className='nav'>
      <div className="navbar-left">
        <Logo />
        <button className="hamburger-menu" onClick={activateHamburgerMenu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </button>
      </div>
      <div className="navbar-right">
        <QuickCreate />
        <CustomWorkout />
        <WorkoutList />
      </div>
    </div>
  )
}

export default Navbar