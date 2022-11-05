import React, { useContext } from 'react';
import { TfiThought } from 'react-icons/tfi';
import mainControllerContext from '../../Context/MainControllerContext';
import '../../App.css';
import useLocalStorage from '../../utilities/useLocalStorage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CustomWorkoutPanel() {

  const controller = useContext(mainControllerContext);

  const [customWorkouts, setCustomWorkouts] = useLocalStorage('customWorkouts', [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const workoutName = document.getElementById('workoutName')

    const existingWorkoutNames = [];

    const workOutStorage = JSON.parse(localStorage.getItem('customWorkouts')) || [];

    for (let workout of workOutStorage) {
      existingWorkoutNames.push(workout.workoutName);
    }

    if (existingWorkoutNames.includes(workoutName.value) || !workoutName.value) return toast.error('Workout cannot already exist or be blank!');

    setCustomWorkouts(() => [...customWorkouts,
    {
      workoutName: document.getElementById('workoutName').value,
      muscleGroup: document.getElementById('muscle-group').value,
      split: document.getElementById('split').value,
      weight: null
    }])

    workoutName.value = '';
    return toast.success('Workout Added! You can modify custom workouts on the workouts page')
  }

  const toggleCustomWorkoutPanel = () => {
    controller.setShowAddWorkout(false);
    document.querySelector('.title').classList.remove('d-none');
    return;
  }


  return (
    <>
      <TfiThought className='thought-icon' />
      <ToastContainer theme='dark' />
      <h1 style={{ color: 'white' }}>Want to Try a new Workout?</h1>
      <h3 style={{ color: 'white' }}>Add your own workout below</h3>
      <form onSubmit={handleSubmit} className="customWorkoutPanel">
        <p className="qc-title">Custom Workout</p>
        <div className="quick-select">
          <label name='workoutName'>Movement Name:</label>
          <div className="custom-workout-input">
            <input type="text" name="workoutName" id="workoutName" />
            <p className='desc'>(curl, squat, etc.)</p>
          </div>
        </div>
        <div className="quick-select">
          <label name='muscle-group'>Muscle Group:</label>
          <select name="muscle-group" id='muscle-group'>
            <option value="chest">Chest</option>
            <option value="shoulders">Shoulders</option>
            <option value="legs">Legs</option>
            <option value="back">Back</option>
            <option value="biceps">Biceps</option>
            <option value="triceps">Triceps</option>
          </select>
        </div>
        <div className="quick-select">
          <label name='Split'>Split:</label>
          <select id='split' name="Split">
            <option value="push">Push</option>
            <option value="pull">Pull</option>
            <option value="na">N/A</option>
          </select>
        </div>
        <button className='submit-btn'>
          Add Custom Workout
        </button>
        <button onClick={toggleCustomWorkoutPanel} className='close-btn'>
          close
        </button>
      </form>

    </>
  )
}

export default CustomWorkoutPanel