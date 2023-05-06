import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Userhome() {
  return (
    <nav className='menu'>
      <ul>
        <li><Link to="/nutrition">Nutrition</Link></li>
        <li><Link to="/workout-goals">Workout Goals</Link></li>
        <li><Link to="/body-measurements">Body Measurements</Link></li>
        <li><Link to="/fitness-goals">Fitness Goals</Link></li>
      </ul>
    </nav>
  );
}

export default Userhome;
