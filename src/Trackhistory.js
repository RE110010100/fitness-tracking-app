import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Trackhistory() {
  const [userWorkoutHistory, setUserWorkoutHistory] = useState([]);

  useEffect(async () => {
    //const userEmail = sessionStorage.getItem('useremail');

    const userEmail = "prku2113@colorado.edu"
    const email = {
      email: userEmail
    };

    const response = await axios.post(`https://4ypaxteme7.execute-api.us-east-2.amazonaws.com/prod/displayworkouthistory`, JSON.stringify(email));
    const jsonArr = await JSON.parse(response.data.body);

    console.log(jsonArr);

    setUserWorkoutHistory(jsonArr);
  }, []);

  if (userWorkoutHistory === null) {
    return <p>Loading...</p>;
  }
  
  return (
    <div>
      <div class="m-4">
      <nav class="nav nav-pills">
        <a href='/Userhome' class="nav-item nav-link"><i class="bi-house-door"></i>Home</a>
        <a href="/nutritionhome" class="nav-item nav-link active">Nutrition</a>
        <a href="/workouthome" class="nav-item nav-link">Workout Goals</a>
        <a href="/bodymeasurements" class="nav-item nav-link">Body Measurements</a>
        <a href="/fitness-goals" class="nav-item nav-link">Fitness Goals</a>
        <a href="/Login" class="nav-item nav-link">Logout</a>
      </nav>
      </div>
      <div class="col text-center">
      <h1> Track your Workout Goals here </h1>
      </div>
      <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Exercise name</th>
            <th scope="col">Repetitions</th>
            <th scope="col">Sets</th>
            <th scope="col">Calories burned</th>
            <th scope="col">Intensity</th>
          </tr>
        </thead>
        <tbody>
        {userWorkoutHistory.map((workout, index) => (
        <tr>
            <th scope="row">{workout.exercisename}</th>
            <td>{workout.reps}</td>
            <td>{workout.sets}</td>
            <td>{workout.calorie}</td>
            <td>{workout.intensity}</td>
        </tr>
    ))}
    </tbody>
    </table>
    </div>
    </div>
  );
  
}

export default Trackhistory;
