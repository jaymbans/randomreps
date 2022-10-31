import React, { useContext } from 'react'
import mainControllerContext from '../../Context/MainControllerContext';
import QuickCreatePanel from './QuickCreatePanel'


function QuickCreate() {
  const controller = useContext(mainControllerContext)

  const toggleQuickCreatePanel = () => {
    controller.setShowQuickCreate(true);
    controller.setShowAddWorkout(false);
    document.querySelector('.title').classList.add('d-none')
    return;
  }

  return (
    <>
      {
        <button
          onClick={toggleQuickCreatePanel} className='quickCreateContainer main-button'>
          Quick Create
        </button>
      }

    </>



  )
}

export default QuickCreate