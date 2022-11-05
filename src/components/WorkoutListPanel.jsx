import React, { useContext } from 'react';
import mainControllerContext from '../Context/MainControllerContext';
import '../App.css'
import { ootbWorkouts } from '../workouts/workouts';
import useLocalStorage from '../utilities/useLocalStorage'
import { MdCancelPresentation } from 'react-icons/md'
import { GiMuscleUp } from 'react-icons/gi'

function WorkoutListPanel() {
  const controller = useContext(mainControllerContext);

  const [customWorkouts, setCustomWorkouts] = useLocalStorage('customWorkouts', [])

  const deleteWorkout = (e) => {
    let node = e.target;
    while (node.nodeName !== 'SPAN') {
      node = node.parentNode;
    }

    const workoutToDel = node.children[0].innerHTML

    const removeArr = [...customWorkouts].filter(workout => workout.workoutName !== workoutToDel);

    setCustomWorkouts(removeArr)
  }

  return (
    <>
      <GiMuscleUp className='muscle-logo' />
      <h1 style={{ color: 'white' }}>Workouts</h1>
      <h3 style={{ color: 'white' }}>all the currently tracked workouts</h3>
      <div className="workoutListPanel">
        <div className="ootb-work-out-list">
          <div className="qc-title">Out of the Box Workouts ({ootbWorkouts.data.length})</div>
          {ootbWorkouts.data.sort().map(workout => {
            return <p className='workouts-list' key={workout.workoutName}>{workout.workoutName}</p>
          })}
        </div>
        <div className="custom-work-out-list">
          <div className="qc-title">Custom Workouts ({customWorkouts.length})</div>
          {customWorkouts.sort().map(workout => {
            return <>
              <span className='workout-tab'><p className='workouts-list' key={workout.workoutName}>{workout.workoutName}</p><button className='delete-workout'
                onClick={deleteWorkout}><MdCancelPresentation className='delete-workout' /></button></span>
            </>
          })}
          {!customWorkouts.length && <p className='workouts-list'>No Workouts Added</p>}
        </div>
      </div>

    </>
  )
}

export default WorkoutListPanel