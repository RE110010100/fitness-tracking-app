import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateMeasurements() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [chest, setChest] = useState("");
  const [waist, setWaist] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSaveMeasurements = async() => {
    // Update the body measurements on the previous page using the navigate function
    console.log("hello")
    const bodymeasurements = {
      email : "roes6117@colorado.edu",
      height: height,
      chest: chest,
      waist: waist,
      weight: weight,
    }

    const response = await axios.post('https://4ypaxteme7.execute-api.us-east-2.amazonaws.com/prod/insertbodymeasurements', JSON.stringify(bodymeasurements));
    console.log(response);

    navigate("/bodymeasurements");
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
    <div class="col text-center">
      <h1>Update Your Measurements</h1>
    </div>
    
      <div class = "card-body p-5" style={{width: '400px'}} >
      <form>
        <div class="mb-3">
        <label>
          Height (cm):
          <input type="text" class="form-control" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        </div>
        <br />
        <div class="mb-3">
        <label>
          Weight (kg):
          <input type="text" class="form-control" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        </div>
        <br />
        <div class="mb-3">
        <label>
          Chest Dimensions (in):
          <input type="text" class="form-control" value={chest} onChange={(e) => setChest(e.target.value)} />
        </label>
        </div>
        <br />
        <div class="mb-3">
        <label>
          Waist Dimensions (in):
          <input type="text" class="form-control" value={waist} onChange={(e) => setWaist(e.target.value)} />
        </label>
        </div>
        <br />
        <div class='d-grid'>
        <button class="btn btn-primary btn-lg" onClick={handleSaveMeasurements}>
          Save
        </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default UpdateMeasurements;
