import React, { useContext } from 'react';
import mainControllerContext from '../Context/MainControllerContext';
import CustomWorkoutPanel from './CustomWorkout/CustomWorkoutPanel';
import QuickCreatePanel from './QuickCreate/QuickCreatePanel';
import WorkoutListPanel from './WorkoutListPanel';

function MainFrame() {
  const controller = useContext(mainControllerContext);

  const toggleQuickCreatePanel = () => {
    controller.setShowQuickCreate(true);
    controller.setShowAddWorkout(false);
    document.querySelector('.title').classList.add('d-none');
    console.log(controller)
    return;
  }

  switch (true) {
    case (controller.showQuickCreate &&
      !controller.showAddworkout &&
      !controller.showWorkoutPanel):
      return (
        <>
          <QuickCreatePanel />
        </>
      );
    case (controller.showAddWorkout &&
      !controller.showQuickCreate &&
      !controller.showWorkoutPanel
    ):
      return (
        <>
          <CustomWorkoutPanel />
        </>
      );
    case (!controller.showAddWorkout &&
      !controller.showQuickCreate &&
      controller.showWorkoutList
    ):
      return (
        <>
          <WorkoutListPanel />
        </>
      );
    default:
      return (
        <div className='main-frame home-screen-bg'>
          <button onClick={toggleQuickCreatePanel} className='start-btn'>
            Let's Make Results
          </button>
        </div>)
  }
}

export default MainFrame