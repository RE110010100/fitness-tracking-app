import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function BodyMeasurements() {
  const navigate = useNavigate();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [chest, setChest] = useState("");
  const [waist, setWaist] = useState("");

  const myFunction = async() => {
    const email = {
      email : "roes6117@colorado.edu"
    }
    const response = await axios.post('https://4ypaxteme7.execute-api.us-east-2.amazonaws.com/prod/displaybodymeasurements', JSON.stringify(email));
    const jsonobj = await JSON.parse(response.data.body);

    console.log(jsonobj);
  
    setHeight(jsonobj.height);
    setWeight(jsonobj.weight);
    setChest(jsonobj.chest);
    setWaist(jsonobj.waist);
  }

  useEffect(() => {
    // make the POST request to the API
    myFunction();
  }, []);


  const handleUpdateMeasurements = () => {
    navigate("/updatemeasurements");
  };

  return (
    <div>
      <div class="m-4">
    <nav class="nav nav-pills">
        <a href='/Userhome' class="nav-item nav-link"><i class="bi-house-door"></i>Home</a>
        <a href="/nutritionhome" class="nav-item nav-link">Nutrition</a>
        <a href="/workouthome" class="nav-item nav-link ">Workout Goals</a>
        <a href="/bodymeasurements" class="nav-item nav-link active">Body Measurements</a>
        <a href="/fitness-goals" class="nav-item nav-link">Fitness Goals</a>
        <a href="/Login" class="nav-item nav-link">Logout</a>
    </nav>
    </div>
    
    <div class="m-4">
    <div class="col text-center">
      <h1>Welcome to your Body Measurements page</h1>
    </div>
    </div>

    <div className="container">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Metric Number</th>
          <th scope="col">Metric</th>
          <th scope="col">Body Measurements</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Height</td>
          <td>{height}cm</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Weight</td>
          <td>{weight}kg</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Chest Dimensions</td>
          <td>{chest} inches</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Waist Dimensions</td>
          <td>{waist} inches</td>
        </tr>
      </tbody>
    </table>
    <div className='d-grid'>
    <button class="btn btn-primary btn-lg" type="button" onClick={handleUpdateMeasurements}>
            Update Measurements
    </button>
    </div>
    </div>
    </div>
  );
}

export default BodyMeasurements;
