import '../App.css'
import QuickCreate from '../components/QuickCreate/QuickCreate';
import CustomWorkout from '../components/CustomWorkout/CustomWorkout';
import WorkoutList from '../components/WorkoutList';
import Logo from './Logo';

function Navbar() {

  return (
    <div className='nav'>
      <div className="navbar-left">
        <Logo />
      </div>
      <div className="navbar-right">
        <QuickCreate />
        <CustomWorkout />
        <WorkoutList />
      </div>
    </div>
  )
}

export default Navbar