import React, { useContext } from 'react';
import ReactSlider from 'react-slider';
import mainControllerContext from '../../Context/MainControllerContext';
import '../../App.css'

function QuickCreatePanel() {
  const controller = useContext(mainControllerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('works');
  }

  const toggleQuickCreatePanel = () => {
    controller.setShowQuickCreate(false);
    document.querySelector('body').classList.remove('transition-green-bg');
    document.querySelector('.header').style.color = 'white';
  }


  return (
    <>
      <form onSubmit={handleSubmit} className="quickCreatePanel">
        <div className="quick-select">
          <label name='muscle-group'>Select Your Targeted Muscle Group:</label>
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
          <label name='duration'>How long is your workout (min)?</label>
          <select name="duration">
            <option value="30">30</option>
            <option value="45">45</option>
            <option value="60">60</option>
            <option value="75">75</option>
          </select>
        </div>
        <button className='submit-btn'>
          Load Workout
        </button>
        <button onClick={toggleQuickCreatePanel} className='close-btn'>
          close
        </button>
      </form>

    </>
  )
}

export default QuickCreatePanel