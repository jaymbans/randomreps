import React, { useContext, useState, useEffect } from 'react';
import mainControllerContext from '../../Context/MainControllerContext';
import '../../App.css'
import { randomWorkoutGenerator } from '../../workouts/workouts'
import WorkoutOutput from '../../workouts/WorkoutOutput';
import { ToastContainer, toast } from 'react-toastify';

function QuickCreatePanel() {
  const controller = useContext(mainControllerContext);

  const [userMuscle, setUserMuscle] = useState('chest');
  const [userDuration, setUserDuration] = useState(30);
  const [loadWorkoutOutput, setLoadWorkoutOutput] = useState(false);
  const [includeCustom, setIncludeCustom] = useState(false);

  const customWorkoutToggle = (e) => {
    let workOutStorage
    if (JSON.parse(localStorage.getItem('customWorkouts'))) {
      workOutStorage = JSON.parse(localStorage.getItem('customWorkouts')).filter(workout => workout.muscleGroup === userMuscle);
    } else {
      workOutStorage = null;
    }

    if (!workOutStorage || !workOutStorage.length) {
      toast.error(`You have no custom workouts for ${userMuscle} day! Head to the custom workout page to add your own!`)
      return;
    }

    setIncludeCustom(!includeCustom);

    let node = e.target;
    if (![node.classList[0]].includes('custom-workout-dial')) {
      node = node.parentNode;
    }


    [...node.classList].includes('custom-workout-dial-turned-on') ?
      node.classList.remove('custom-workout-dial-turned-on') :
      node.classList.add('custom-workout-dial-turned-on');
  }


  const [userWorkout, setUserWorkout] = useState({
    muscle: userMuscle,
    duration: userDuration,
    workouts: [],
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    let randomWorkouts;
    let customWorkouts;

    const workOutStorage = JSON.parse(localStorage.getItem('customWorkouts')) || [];

    if (includeCustom) {
      customWorkouts = workOutStorage.filter(workout => workout.muscleGroup === userMuscle);
    } else {
      customWorkouts = [];
    }

    randomWorkouts = randomWorkoutGenerator(userDuration, userMuscle, customWorkouts)

    setUserWorkout({
      muscle: userMuscle,
      duration: userDuration,
      workouts: [...randomWorkouts]
    })

    setLoadWorkoutOutput(true);
    return
  }

  const handleMuscleChange = (e) => {
    setUserMuscle(e.target.value);
    setIncludeCustom(false);
    document.querySelector('.custom-workout-dial').classList.remove('custom-workout-dial-turned-on')
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
      <h1 className='main-page-title'>Your lift is our command</h1>
      <h3 className='main-page-title'>yes... it's that easy</h3>
      <ToastContainer theme='dark' />
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
        <span className='customWorkoutSpan'>
          Include Custom Workouts <button onClick={customWorkoutToggle} type='button' className="custom-workout-dial">
            <div className="custom-workout-dial-blip"></div>
          </button>
        </span>
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