import React, { useContext } from 'react';
import mainControllerContext from '../Context/MainControllerContext';
import QuickCreatePanel from './QuickCreate/QuickCreatePanel';

function MainFrame() {
  const controller = useContext(mainControllerContext);

  const toggleQuickCreatePanel = () => {
    controller.setShowQuickCreate(true);
    controller.setShowAddWorkout(false);
    document.querySelector('.title').classList.add('d-none')
    return;
  }

  switch (true) {
    case (!controller.showQuickCreate &&
      !controller.showAddworkout):
      return (
        <div className='main-frame home-screen-bg'>
          <button onClick={toggleQuickCreatePanel} className='start-btn'>
            Let's Make Results
          </button>
        </div>);
      break;
    case (controller.showQuickCreate &&
      !controller.showAddworkout):
      return (
        <>
          <QuickCreatePanel />
        </>
      );
      break;
    default:
      return (
        <div className='main-frame home-screen-bg'>
          <button onClick={toggleQuickCreatePanel} className='start-btn'>
            Let's Make Results
          </button>
        </div>)
      break;
  }
}

export default MainFrame