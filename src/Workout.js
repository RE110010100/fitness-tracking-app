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
  const [exercise, setExercise] = useState("");
  const [data, setData] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [cals, setCals] = useState(0);

  // Define functions for adding, modifying, and deleting workouts
  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
    console.log(workouts);
  };

  const modifyWorkout = (index, updatedWorkout) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts[index] = updatedWorkout;
    setWorkouts(updatedWorkouts);
  };

  const construct = () => {

    var len = workouts.length;
    const userEmail = sessionStorage.getItem('useremail');

    const userworkouts = [];
    // userworkouts['email'] = "prku2113@colorado.edu";
    // workouts['workout'] = [];

    for(let i = 0; i < len; i++)
    {
      const tempobj = {
        exercisename : workouts[i].exercisename,
        reps : reps,
        sets : sets,
        calorie : 100,
        intensity : workouts[i].intensity
      }
      // userworkouts['workout'].push(tempobj); 
      userworkouts.push(tempobj);
    }
    // const newWorkout = {
    //     user_email : userEmail,
    //     name : workouts[0].exercisename,
    //     reps : reps,
    //     sets : sets,
    //     calorie : 100,
    //     intensity : workouts[0].intensity
    // }
    console.log(userworkouts);
    return userworkouts;

  }

  const handleSave = async () => {
    console.log("button clicked");
    var len = workouts.length;
    const userEmail = sessionStorage.getItem('useremail');
    
    const userworkouts = construct();
    const newWorkout = {}
    newWorkout["email"] = "prku2113@colorado.edu"
    newWorkout["workout"] = userworkouts


    const response = await axios.post('https://4ypaxteme7.execute-api.us-east-2.amazonaws.com/prod/insertworkoutinfo',JSON.stringify(newWorkout));
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

  const selectExercise = (selectedExercise) => {
    setExercise(selectedExercise);
  };

  return (
    <div>
    <div class="m-4">
    <nav class="nav nav-pills">
        <a href='/Userhome' class="nav-item nav-link"><i class="bi-house-door"></i>Home</a>
        <a href="/nutritionhome" class="nav-item nav-link ">Nutrition</a>
        <a href="/workouthome" class="nav-item nav-link active">Workout Goals</a>
        <a href="/bodymeasurements" class="nav-item nav-link">Body Measurements</a>
        <a href="/fitness-goals" class="nav-item nav-link">Fitness Goals</a>
        <a href="/Login" class="nav-item nav-link">Logout</a>
    </nav>
    </div>
    <div class="container-fluid">
    <div class="col text-center">
      <h1>Add Your Exercises Here</h1>
    </div>
    <div>
      <div class = "card-body p-5" style={{width: '400px'}} >
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

         const response = await axios.post('https://4ypaxteme7.execute-api.us-east-2.amazonaws.com/prod/getworkoutinfo',JSON.stringify(newWorkout));
         const jsonobj = await JSON.parse(response.data.body);
         await setSets(jsonobj.sets);
         await setReps(jsonobj.reps);
         await setCals(jsonobj.calories);
         await console.log(jsonobj)
         //const jsonobject = JSON.parse()

         //setReps(12)
           const newWorkout1 = {
            exercisename: e.target.exercise.value,
            intensity: intensity,
            sets : sets,
            reps : reps,
            calorie : cals,
          };
         await addWorkout(newWorkout1);
        }}>
          <label>
            Exercise:
            <input type="text" name="exercise" class="form-control" onChange={(e) => selectExercise(e.target.value)}/>
          </label>
          <br />
          <label>
            Calories:
            <input type="text" name="calories" class="form-control"/>
          </label>
          <br />
          <label>
            Intensity:
            <select value={intensity} class="form-select" onChange={(e) => selectIntensity(e.target.value)}>
              <option value="">Select Intensity</option>
              <option value="beginner">Beginner</option>
              <option value="medium">Medium</option>
              <option value="advanced">Advanced</option>
            </select>
          </label>
          <br/>
          <br />
          <button type="submit" class="btn btn-primary">Add Workout</button>
        </form>
      </div>
      <div>
        <h2>Workout List</h2>
        <ul>
          {workouts.map((workout, index) => (
            <li key={index}>
              {workout.exercisename} - <input type="text" name="sets" defaultValue={sets}/> sets of <input type="text" name="reps" defaultValue={reps}/> reps ({workout.intensity})
              <button onClick={() => modifyWorkout(index, {...workout, intensity: intensity})}>Modify</button>
              <button onClick={() => deleteWorkout(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick = {handleSave} class="btn btn-primary">Save</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default WorkoutPage;
