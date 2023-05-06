import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tracknutrtition = () => {
  const [userData, setUserData] = useState([]);

  useEffect(async () => {
    // get user email from session storage
    const userEmail = sessionStorage.getItem('useremail');

    // make API call with user email
    const email = {

        email   : "prku2113@colorado.edu"
    }

    const response = await axios.post('https://4ypaxteme7.execute-api.us-east-2.amazonaws.com/prod/displaynutrition', JSON.stringify(email));
    const jsonArr = await JSON.parse(response.data.body);

    setUserData(jsonArr);
    console.log(jsonArr);
  }, []);

  if (userData === null) {
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
      <h1> Track your Nutrition here </h1>
      </div>
      <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Food</th>
            <th scope="col">Quantity</th>
            <th scope="col">Calories</th>
          </tr>
        </thead>
        <tbody>
        {userData.map((food1, index) => (
          <tr>
            <th scope="row">{food1.food}</th>
            <td>{food1.quantity} {food1.units}</td>
            <td>{food1.calorie}</td>
          </tr>
    ))} 
    </tbody>
    </table>
    </div>
    </div>
  );
};

export default Tracknutrtition;
