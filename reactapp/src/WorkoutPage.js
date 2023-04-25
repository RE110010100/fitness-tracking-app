import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const WorkoutPage = (props) => {
  // Define state variables for workouts and intensity
  const location = useLocation();
  const [workouts, setWorkouts] = useState([]);
  const [intensity, setIntensity] = useState("");
  const [exercise, setExercise] = useState("");
  const [data, setData] = useState(null);

  const myObjectStr = null;

  const workdata = location.state.workdata;

  // Define functions for adding, modifying, and deleting workouts
  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  const selectExercise = (selectedExercise) => {
    setExercise(selectedExercise);
  }

  const modifyWorkout = (index, updatedWorkout) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts[index] = updatedWorkout;
    setWorkouts(updatedWorkouts);
  };

  const deleteWorkout = (index) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts.splice(index, 1);
    setWorkouts(updatedWorkouts);
  };

  // Define function for selecting intensity
  const selectIntensity = (selectedIntensity) => {
    setIntensity(selectedIntensity);
  };

  return (
    <div>
      <h1>Workout Page</h1>
      <div>
        <h2>Add Workout</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const newWorkout = {
            exercise: exercise,
            intensity: intensity
          };
        }}>
          <label>
            Exercise:
            <select value={exercise} onChange={(e) => selectExercise(e.target.value)}>
              <option value="custom exercise">Custom Exercise</option>
              <option value="chest press">Chess Press</option>
              <option value="leg press">Leg Press</option>
              <option value="bicep curls">Bicep Curls</option>
            </select>
          </label>
          <br />
          <label>
            Intensity:
            <select value={intensity} onChange={(e) => selectIntensity(e.target.value)}>
              <option value="">Select Intensity</option>
              <option value="beginner">Beginner</option>
              <option value="medium">Medium</option>
              <option value="advanced">Advanced</option>
            </select>
          </label>
          <br />
          <button type="submit"><Link to="/workoutdisplay" state = {{data : {exercise: exercise, intensity: intensity}}}>Display your metrics</Link></button>
        </form>
      </div>
      <div>
        <h2>Workout List</h2>
        {workdata !== null && <p>My Variable: {workdata}</p>}
      </div>
    </div>
  );
};

export default WorkoutPage;
