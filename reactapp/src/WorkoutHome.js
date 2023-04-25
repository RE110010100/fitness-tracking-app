import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

function WorkoutHome() {
  return (
    <div>
      <h1>Welcome to the Workout Home Page!</h1>
      <li><button><Link to="/workout">Add-Workout</Link></button></li>
      <li><button>Track-History</button></li>
    </div>
  );
}

export default WorkoutHome;
