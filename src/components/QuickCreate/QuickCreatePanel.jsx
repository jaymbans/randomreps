import React, { useContext, useState } from 'react';
import mainControllerContext from '../../Context/MainControllerContext';
import '../../App.css'
import { randomWorkoutGenerator } from '../../workouts/workouts'
import WorkoutOutput from '../../workouts/WorkoutOutput';

function QuickCreatePanel() {
  const controller = useContext(mainControllerContext);

  const [userMuscle, setUserMuscle] = useState('chest');
  const [userDuration, setUserDuration] = useState(30);
  const [loadWorkoutOutput, setLoadWorkoutOutput] = useState(false);


  const [userWorkout, setUserWorkout] = useState({
    muscle: userMuscle,
    duration: userDuration,
    workouts: [],
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    let randomWorkouts = randomWorkoutGenerator(userDuration, userMuscle);


    setUserWorkout({
      muscle: userMuscle,
      duration: userDuration,
      workouts: [...randomWorkouts],
    })

    setLoadWorkoutOutput(true);
    return
  }

  const handleMuscleChange = (e) => {
    setUserMuscle(e.target.value);
    return;
  }
  const handleDurationChange = (e) => {
    setUserDuration(e.target.value);
    return;
  }

  const toggleQuickCreatePanel = () => {
    controller.setShowQuickCreate(false);
    document.querySelector('.title').classList.remove('d-none');
  }



  return (
    <>
      <div className="dumbbell-gif"></div>
      <h1 style={{ color: 'white' }}>Your lift is our command</h1>
      <h3 style={{ color: 'white' }}>yes... it's that easy</h3>
      <form id='quick-create-form' onSubmit={handleSubmit} className="quickCreatePanel">
        <p className="qc-title">Quick Create</p>
        <div className="quick-select">
          <label name='muscle'>Muscle Target:</label>
          <select onChange={handleMuscleChange} name="muscle">
            <option value="chest">Chest</option>
            <option value="shoulders">Shoulders</option>
            <option value="legs">Legs</option>
            <option value="back">Back</option>
            <option value="biceps">Biceps</option>
            <option value="triceps">Triceps</option>
          </select>
        </div>
        <div className="quick-select">
          <label name='duration'>Workout Duration:</label>
          <select name="duration" onChange={handleDurationChange}>
            <option value="30">30 min</option>
            <option value="45">45 min</option>
            <option value="60">60 min</option>
          </select>
        </div>
        <button className='submit-btn'>
          Load Workout
        </button>
        <button onClick={toggleQuickCreatePanel} className='close-btn'>
          close
        </button>
      </form>
      {
        loadWorkoutOutput ?
          <WorkoutOutput workout={userWorkout} /> :
          <></>
      }

    </>
  )
}

export default QuickCreatePanel