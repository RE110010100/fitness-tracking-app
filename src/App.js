import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Login from './Login';
import WorkoutPage from './Workout';
import SignUp from './App_tmp1';
import Userhome from './Userhome';
//import BodyMeasurementsPage from './components/BodyMeasurementsPage';
import WorkoutHome from './WorkoutHome';
import NutritionHome from './NutritionHome';
import NutritionPage from './Nutrition';
import BodyMeasurements from './Bodymeasurements';
import UpdateMeasurements from './UpdateMeasurements';
import Tracknutrtition from './Tracknutrition';
import Trackhistory from './Trackhistory';
//import WorkoutDisplay from './WorkoutDisplay';


function App() {

  return (
    <div>
    <Routes>
        <Route path='/' element = {<Login />}/>
        <Route path='/Login' element = {<Login />}/>
        <Route path="/workouthome" element = {<WorkoutHome />}/>
        <Route path='/SignUp' element = {<SignUp />}/>
        <Route path="/workout" element = {<WorkoutPage />}/>
        <Route path="/track-workout" element = {<Trackhistory />}/>
        <Route path="/Userhome" element = {<Userhome />} />
        <Route path="/nutritionhome" element ={<NutritionHome />} />
        <Route path="/nutrition" element = {<NutritionPage />} />
        <Route path="/track-nutrition" element = {<Tracknutrtition />} />
        <Route path="/bodymeasurements" element = {<BodyMeasurements />} />
        <Route path="/updatemeasurements" element = {<UpdateMeasurements />} />
    </Routes>
    </div>
  );
}

export default App;
