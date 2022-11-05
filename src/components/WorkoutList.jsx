import React, { useContext } from 'react'
import '../App.css'
import { ootbWorkouts } from '../workouts/workouts'
import mainControllerContext from '../Context/MainControllerContext';

function WorkoutList() {
  const controller = useContext(mainControllerContext)

  const toggleWorkoutListPanel = () => {
    controller.setShowQuickCreate(false);
    controller.setShowAddWorkout(false);
    controller.setShowWorkoutList(true);
    document.querySelector('.title').classList.add('d-none')
    return;
  }

  return (
    <button onClick={toggleWorkoutListPanel} className='main-button' >Workouts</button>
  )
}

export default WorkoutList