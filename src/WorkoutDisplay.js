import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const WorkoutDisplay = () => {
  // Define state variables for workouts and intensity

  const location = useLocation();
  const [workouts, setWorkouts] = useState([]);
  const [intensity, setIntensity] = useState("");

  const data = location.state.data;
  const default_exercise = data.exercise;


  return (
    <div>
      <h1>Workout Display</h1>
      <div>
        <h2>confirm your exercise details</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <label>
            Exercise:
            <input type="text" name="exercise" defaultValue = {default_exercise} />
          </label>
          <br />
          <label>
            Sets:
            <input type="number" name="sets" />
          </label>
          <br />
          <label>
            Reps:
            <input type="number" name="reps" />
          </label>
          <label>
            Reps:
            <input type="number" name="calories per rep"/>
          </label>
          <br />
          <br />
          <button type="submit">save workout</button>
        </form>
      </div>
      <div>
        <h2>Workout List</h2>
      </div>
    </div>
  );
};

export default WorkoutDisplay;
