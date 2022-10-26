import React, { useContext } from 'react';
import ReactSlider from 'react-slider';
import mainControllerContext from '../../Context/MainControllerContext';
import '../../App.css'

function CustomWorkoutPanel() {
  const controller = useContext(mainControllerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('works');
  }

  const toggleCustomWorkoutPanel = () => {
    controller.setShowAddWorkout(false);
    document.querySelector('body').classList.remove('transition-purple-bg')
  }


  return (
    <>
      <form onSubmit={handleSubmit} className="customWorkoutPanel">
        <div className="quick-select">
          <label name='workoutName'>Movement Name:</label>
          <input type="text" name="workoutName" id="workoutName" />
          <p className='desc'>(curl, squat, etc.)</p>
        </div>
        <div className="quick-select">
          <label name='muscle-group'>Muscle Group:</label>
          <select name="muscle-group">
            <option value="chest">Chest</option>
            <option value="shoulders">Shoulders</option>
            <option value="legs">Legs</option>
            <option value="back">Back</option>
            <option value="bis">Biceps</option>
            <option value="tris">Triceps</option>
          </select>
        </div>
        <div className="quick-select">
          <label name='Split'>Split:</label>
          <select name="Split">
            <option value="push">Push</option>
            <option value="pull">Pull</option>
            <option value="na">N/A</option>
          </select>
        </div>
        <div className="quick-select">
          <label name='reps'>Reps(#):</label>
          <input type="range" name="reps" id="reps" min='2' max='20' />
        </div>
        <div className="quick-select">
          <label name='reps'>Sets(#):</label>
          <input type="number" name="reps" id="reps" min='1' max='15' />
        </div>
        <div className="quick-select">
          <label name='weight'>Current Weight?</label>
          <input type="number" name="weight" id="weight" />
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