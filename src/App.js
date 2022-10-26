// imports
import './App.css';
import { useState } from 'react';

// components
import Header from './components/Header';
import QuickCreate from './components/QuickCreate/QuickCreate';
import mainControllerContext from './Context/MainControllerContext';

import CustomWorkout from './components/CustomWorkout/CustomWorkout';
import Favorites from './components/Favorites';


function App() {

  // state management
  const [showQuickCreate, setShowQuickCreate] = useState(false);
  const [showHelp, setShowHelp] = useState(true);
  const [showAddWorkout, setShowAddWorkout] = useState(false);


  return (
    <div className="app-container">
      <mainControllerContext.Provider value={{
        showQuickCreate,
        setShowQuickCreate,
        showAddWorkout,
        setShowAddWorkout
      }}>
        <Header />
        <QuickCreate />
        <CustomWorkout />
        <Favorites />
        <button className='helpContainer main-button'>Help</button>
      </mainControllerContext.Provider>
    </div>
  );
}

export default App;
