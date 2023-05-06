import React, { useState } from "react";
import axios from 'axios';

//const { createProxyMiddleware } = require('http-proxy-middleware');

//module.exports = function(app) {
//  app.use('https://tvj9b1l42b.execute-api.us-east-2.amazonaws.com/beta-backend/workout', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
//};


const NutritionPage = () => {
  // Define state variables for workouts and intensity
  const [nutritions, setNutritions] = useState([]);
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("grams");
  const [cals, setCals] = useState(0);

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    setCalories(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };


  // Define functions for adding, modifying, and deleting workouts
  const addNutrition = (newNutrition) => {
    setNutritions([...nutritions, newNutrition]);
  };

  const modifyNutrition = (index, updatedNutrition) => {
    const updatedNutritions = [...nutritions];
    updatedNutritions[index] = updatedNutrition;
    setNutritions(updatedNutritions);
  };

  const construct = () => {

    var len = nutritions.length;

    const userlist = [];

    for(let i=0; i<len; i++)
    {
      const tempobj = {
        food : nutritions[i].food,
        calorie : nutritions[i].calorie,
        quantity : nutritions[i].quantity,
        units : nutritions[i].units
      }
      userlist.push(tempobj);
    }
    console.log(nutritions);
    return userlist;

  }

  const handleSave = async () => {
    console.log("button clicked");
    var len = nutritions.length;
    const userEmail = sessionStorage.getItem('useremail');

    const usernutritions = construct();
    const newNutrition = {}

    newNutrition["email"] = "prku2113@colorado.edu";
    newNutrition["nutrition"] = usernutritions;

    const response = await axios.post(' https://4ypaxteme7.execute-api.us-east-2.amazonaws.com/prod/insertnutrition',JSON.stringify(newNutrition));
    const jsonobj = await JSON.parse(response.data.body);
    console.log(jsonobj)

    console.log(nutritions);
    const updatedNutritions = [...nutritions];
    updatedNutritions.splice(0, len);
    setNutritions(updatedNutritions);

  }

  const deleteNutrition = (index) => {
    const updatedNutritions = [...nutritions];
    updatedNutritions.splice(index, 1);
    setNutritions(updatedNutritions);
  };

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
    <div class="container-fluid">
    <div class="col text-center">
      <h1>Add Your Nutrition Here</h1>
    </div>
      <div>
      <div class = "card-body p-5" style={{width: '400px'}} >
        <form onSubmit={async (e) => {
          e.preventDefault();
          const newNutrition = {
            food: e.target.food.value,
            calorie: e.target.calories.value,
            quantity : e.target.quantity.value,
            units : e.target.units.value
          };     
          addNutrition(newNutrition);
        }}>
          <label>
            Food:
            <input type="text" class="form-control" name="food" onChange={handleFoodChange} />
          </label>
          <br />
          <label>
            Calories:
            <input type="text" class="form-control" name="calories" onChange={handleCaloriesChange} />
          </label>
          <br />
          <label>
            Quantity:
            <input type="text" class="form-control" name="quantity" value={quantity} onChange={handleQuantityChange} />
          </label>
          <select name="units" class="form-select" value={unit} onChange={handleUnitChange}>
            <option value="grams">grams</option>
            <option value="milliliters">milliliters</option>
          </select>
          <br />
          <button type="submit" class="btn btn-primary">Add Nutrition</button>
        </form>
      </div>
      <div>
        <h2>Nutrition List</h2>
        <ul>
          {nutritions.map((nutrition, index) => (
            <li key={index}>
              {nutrition.food} - <input type="text" name="cals" defaultValue={nutrition.calorie}/> calories 
              <button class="btn btn-danger" onClick={() => deleteNutrition(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <button class="btn btn-primary" onClick = {handleSave}>Save</button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default NutritionPage;
