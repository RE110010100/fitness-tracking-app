import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignUp from './App_tmp1';
import Login from './Login';
import WorkoutHome from './WorkoutHome';
import WorkoutHistory from './WorkoutHistory';
import { BrowserRouter } from 'react-router-dom';
import Userhome from './Userhome';
import NutritionPage from './Nutrition';
import BodyMeasurements from './Bodymeasurements';
import Trackhistory from './Trackhistory';
import Tracknutrtition from './Tracknutrition';

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);

