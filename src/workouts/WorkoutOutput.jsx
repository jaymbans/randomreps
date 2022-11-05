import React, { useState, useEffect, CSSProperties } from 'react'
import GridLoader from "react-spinners/GridLoader";

function WorkoutOutput(props) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [props.workout])

  return (
    <section className='workout-output'>
      {isLoading ?
        <div className="loader">
          <GridLoader color='white' />
        </div>
        :
        <>
          <div className="workout-output" id='slide'>
            <span>
              <p className='qc-title'>{props.workout.duration} min {props.workout.muscle} Workout
              </p>
            </span>
            <div className="workouts">
              {props.workout.workouts.map(workout => {
                return (<div className="workout" key={workout.workoutName}>
                  <p>{workout.workoutName} - {workout.sets}x{workout.reps}</p>
                </div>)
              })}
            </div>
          </div>
        </>
      }

    </section>
  )
}

export default WorkoutOutput