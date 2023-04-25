import React, { useState } from "react";
import axios from 'axios';

//const { createProxyMiddleware } = require('http-proxy-middleware');

//module.exports = function(app) {
//  app.use('https://tvj9b1l42b.execute-api.us-east-2.amazonaws.com/beta-backend/workout', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
//};


const WorkoutPage = () => {
  // Define state variables for workouts and intensity
  const [workouts, setWorkouts] = useState([]);
  const [intensity, setIntensity] = useState("");
  const [data, setData] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [cals, setCals] = useState(0);

  // Define functions for adding, modifying, and deleting workouts
  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  const modifyWorkout = (index, updatedWorkout) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts[index] = updatedWorkout;
    setWorkouts(updatedWorkouts);
  };

  const handleSave = async () => {
    console.log("button clicked");
    var len = workouts.length;

    const newWorkout = {
        user_email : "h13kdml@colorado.edu",
        name : workouts[0].exercisename,
        reps : reps,
        sets : sets,
        calorie : 100,
        intensity : workouts[0].intensity
    }

    console.log(workouts);

    const response = await axios.post('https://tvj9b1l42b.execute-api.us-east-2.amazonaws.com/beta-backend/storeworkouthistory-gateway',JSON.stringify(newWorkout));
    const jsonobj = await JSON.parse(response.data.body);
    console.log(jsonobj)
    const updatedWorkouts = [...workouts];
    updatedWorkouts.splice(0, len);
    setWorkouts(updatedWorkouts);

  }

  const deleteWorkout = (index) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts.splice(index, 1);
    setWorkouts(updatedWorkouts);
  };

  // Define function for selecting intensity
  const selectIntensity = (selectedIntensity) => {
    setIntensity(selectedIntensity);
  };

  const createJSON = () => {

  }



  return (
    <div>
      <h1>Workout Page</h1>
      <div>
        <h2>Add Workout</h2>
        <form onSubmit={async (e) => {
          e.preventDefault();
          const newWorkout = {
            exercisename: e.target.exercise.value,
            intensity: intensity
          };     
        /* const response = axios.post('https://tvj9b1l42b.execute-api.us-east-2.amazonaws.com/beta-backend/getworkoutdetails-gateway',JSON.stringify(newWorkout))
         .then(response => {
            //setData(response.data.body)
            //setData(response.data.body)
            const jsonobj = JSON.parse(response.data.body)
            setSets(jsonobj.sets)
            setReps(jsonobj.reps)
            //console.log(data)
            
            //console.log(jsonobj)
            //e.target.sets.value = 3
         }) 
         .catch(error => console.error(error))
         */

         const response = await axios.post('https://tvj9b1l42b.execute-api.us-east-2.amazonaws.com/beta-backend/getworkoutdetails-gateway',JSON.stringify(newWorkout));
         const jsonobj = await JSON.parse(response.data.body);
         await setSets(jsonobj.sets);
         await setReps(jsonobj.reps);
         await setCals(jsonobj.calories);
         await console.log(jsonobj)
         //const jsonobject = JSON.parse()

         //setReps(12)
           const newWorkout1 = {
            name: e.target.exercise.value,
            intensity: intensity,
            sets : sets,
            reps : reps,
            calorie : cals,
          };
         await addWorkout(newWorkout);
        }}>
          <label>
            Exercise:
            <input type="text" name="exercise" />
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
          <br />C
          <button type="submit">Add Workout</button>
        </form>
      </div>
      <div>
        <h2>Workout List</h2>
        <ul>
          {workouts.map((workout, index) => (
            <li key={index}>
              {workout.exercisename} - <input type="text" name="sets" defaultValue={sets}/> sets of <input type="text" name="exercise" defaultValue={reps}/> reps ({workout.intensity})
              <button onClick={() => modifyWorkout(index, {...workout, intensity: intensity})}>Modify</button>
              <button onClick={() => deleteWorkout(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick = {handleSave}>Save</button>
      </div>
    </div>
  );
};

export default WorkoutPage;
