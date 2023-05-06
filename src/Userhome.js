import React from 'react';
import { Link } from 'react-router-dom';
//import "./Userhome.css";
import { useLocation } from 'react-router-dom';
import backgroundImage from './background-image.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Userhome() {
  const location = useLocation();
  const name = sessionStorage.getItem("name");
  console.log(name);
  


  return (
    <div>
    <div class="m-4">
    <nav class="nav nav-pills">
        <a href='/Userhome' class="nav-item nav-link active"><i class="bi-house-door"></i>Home</a>
        <a href="/nutritionhome" class="nav-item nav-link">Nutrition</a>
        <a href="/workouthome" class="nav-item nav-link">Workout Goals</a>
        <a href="/bodymeasurements" class="nav-item nav-link">Body Measurements</a>
        <a href="/fitness-goals" class="nav-item nav-link">Fitness Goals</a>
        <a href="/Login" class="nav-item nav-link">Logout</a>
    </nav>
    </div>
  <div class="container-fluid">
    <div class="p-5 my-4 bg-light rounded-3">
        <h1>Welcome {name}</h1>
        <p class="lead">Are you ready to take your fitness journey to the next level? Our app is designed to help you track your progress, stay motivated, and reach your fitness goals. Whether you're a beginner or an experienced athlete, we have the tools and resources to help you succeed.

With our app, you can easily track your workouts, track your nutrition, and your body measurements, which will all help you to strive towards a healthier lifestyle. Whether you're looking to lose weight, build muscle, or just feel better overall, our app has everything you need to succeed.
</p>
</div>
  </div>
  <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <h1 className="text-light">Welcome to your fitness tracking webapp</h1>
    </div>
  </div>
  );
}

export default Userhome;
