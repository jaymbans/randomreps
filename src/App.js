// imports
import './App.css';
import { useState } from 'react';

// components
import Header from './components/Header';
import mainControllerContext from './Context/MainControllerContext';
import MainFrame from './components/MainFrame';



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
        <MainFrame />
      </mainControllerContext.Provider>
    </div>
  );
}

export default App;
