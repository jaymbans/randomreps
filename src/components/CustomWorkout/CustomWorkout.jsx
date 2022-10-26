import React, { useContext } from 'react';
import mainControllerContext from '../../Context/MainControllerContext';
import CustomWorkoutPanel from './CustomWorkoutPanel'

function CustomWorkout() {
  const controller = useContext(mainControllerContext);

  const toggleAddWorkoutPanel = () => {
    controller.setShowAddWorkout(true);
    controller.setShowQuickCreate(false);
    document.querySelector('body').classList.add('transition-purple-bg')
    return;
  }

  return (
    <>
      {controller.showAddWorkout &&
        !controller.showQuickCreatePanel
        ?
        <CustomWorkoutPanel />
        :
        <button onClick={toggleAddWorkoutPanel} className='customWorkoutContainer main-button'>
          Add Custom Workout
        </button>
      }
    </>
  )
}

export default CustomWorkout