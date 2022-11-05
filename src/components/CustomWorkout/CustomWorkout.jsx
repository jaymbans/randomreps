import React, { useContext } from 'react';
import mainControllerContext from '../../Context/MainControllerContext';
import CustomWorkoutPanel from './CustomWorkoutPanel'

function CustomWorkout() {
  const controller = useContext(mainControllerContext);

  const toggleAddWorkoutPanel = () => {
    controller.setShowQuickCreate(false);
    controller.setShowAddWorkout(true);
    document.querySelector('.title').classList.add('d-none');
    return;
  }

  return (
    <>
      <button onClick={toggleAddWorkoutPanel} className='customWorkoutContainer main-button'>
        Add Workout
      </button>
    </>
  )
}

export default CustomWorkout