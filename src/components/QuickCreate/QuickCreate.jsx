import React, { useContext } from 'react'
import mainControllerContext from '../../Context/MainControllerContext';
import QuickCreatePanel from './QuickCreatePanel'


function QuickCreate() {
  const controller = useContext(mainControllerContext)

  const toggleQuickCreatePanel = () => {
    controller.setShowQuickCreate(true);
    controller.setShowAddWorkout(false);
    document.querySelector('body').classList.add('transition-green-bg')
    document.querySelector('.header').style.color = 'rgb(59, 59, 59)'
    return;
  }

  return (
    <>
      {
        controller.showQuickCreate &&
          !controller.showAddWorkout ?
          <QuickCreatePanel /> :
          <button onClick={toggleQuickCreatePanel} className='quickCreateContainer main-button'>
            Quick Create
          </button>
      }

    </>



  )
}

export default QuickCreate