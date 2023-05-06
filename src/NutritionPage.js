import React, { useState } from "react";

function Nutrition() {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("grams");
  const [nutritionList, setNutritionList] = useState([]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      food: food,
      calories: calories,
      quantity: quantity,
      unit : unit
    };
    setNutritionList([...nutritionList, newItem]);
    setFood("");
    setCalories("");
    setQuantity("");
  };

  const handleDelete = (index) => {
    const newList = [...nutritionList];
    newList.splice(index, 1);
    setNutritionList(newList);
  };

  const construct = () => {

    var len = nutritionList.length;

    const userlist = [];

    for(let i=0; i<len; i++)
    {
      const tempobj = {
        food : nutritionList[i].food,
        calorie : nutritionList[i].calories,
        quantity : nutritionList[i].quantity,
        units : nutritionList[i].units
      }
      userlist.push(tempobj);
    }
    console.log(userlist);
    return userlist;

  }

  


  const handleEdit = (index, newFood, newCalories, newQuantity) => {
    const newList = [...nutritionList];
    newList[index].food = newFood;
    newList[index].calories = newCalories;
    newList[index].quantity = newQuantity + " " + newList[index].quantity.split(" ")[1];
    setNutritionList(newList);
  };

  return (
    <div>
      <h1>Nutrition Page</h1>
      <div>
      <h2>Add Nutrition</h2>    
      <form onSubmit={handleSubmit}>
        <label>
          Food:
          <input type="text" value={food} onChange={handleFoodChange} />
        </label>
        <br />
        <label>
          Calories:
          <input type="text" value={calories} onChange={handleCaloriesChange} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="text" value={quantity} onChange={handleQuantityChange} />
        </label>
        <select value={unit} onChange={handleUnitChange}>
          <option value="grams">grams</option>
          <option value="milliliters">milliliters</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {nutritionList.map((item, index) => (
          <li key={index}>
            <div>{item.food}</div>
            <div>{item.calories} calories</div>
            <div>
              {item.quantity}
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(index, prompt("New food"), prompt("New calories"), prompt("New quantity"))}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Nutrition;
