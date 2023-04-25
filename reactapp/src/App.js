import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
//import LoginPage from './LoginPage';
import WorkoutPage from './Workout';
//import BodyMeasurementsPage from './components/BodyMeasurementsPage';
import WorkoutHome from './WorkoutHome';
//import WorkoutDisplay from './WorkoutDisplay';


function App() {

  return (
    <div>
    <Routes>
        <Route path="/" element = {<WorkoutHome />}/>
        <Route path="/workout" element = {<WorkoutPage />}/>
    </Routes>
    </div>
  );
}

export default App;
