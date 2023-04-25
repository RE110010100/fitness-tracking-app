import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './App_tmp1'
import WorkoutHistory from './WorkoutHistory';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <WorkoutHistory />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

