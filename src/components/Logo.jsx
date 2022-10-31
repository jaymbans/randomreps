import React, { useContext } from 'react'
import { CiDumbbell } from 'react-icons/ci'
import mainControllerContext from '../Context/MainControllerContext';

function Logo() {
  const controller = useContext(mainControllerContext);

  const toggleQuickCreatePanel = () => {
    controller.setShowQuickCreate(false);
    document.querySelector('.title').classList.remove('d-none');
  }

  return (
    <button onClick={toggleQuickCreatePanel} className='logo'>
      <CiDumbbell className='logo-pic' />
      Random Reps
    </button>
  )
}

export default Logo