import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import workoutgoals from './workoutgoals.jpeg';
import axios from 'axios';



function WorkoutHome() {

  const share = async () => {
    console.log("button clicked");
    const email = {

      workout : "y"
  }

  const response = await axios.post('https://4ypaxteme7.execute-api.us-east-2.amazonaws.com/prod/twitter', JSON.stringify(email));
  const jsonobj = await JSON.parse(response.data.body);

  window.location.href = jsonobj;


  console.log(typeof(jsonobj))
  }

  return (
    <div>
    <div class="m-4">
    <nav class="nav nav-pills">
        <a href='/Userhome' class="nav-item nav-link"><i class="bi-house-door"></i>Home</a>
        <a href="/nutritionhome" class="nav-item nav-link">Nutrition</a>
        <a href="/workouthome" class="nav-item nav-link active">Workout Goals</a>
        <a href="/bodymeasurements" class="nav-item nav-link">Body Measurements</a>
        <a href="/fitness-goals" class="nav-item nav-link">Fitness Goals</a>
        <a href="/Login" class="nav-item nav-link">Logout</a>
    </nav>
    </div>
      <div class="m-2">
      <div class="col text-center">
      <h1>Welcome to your Workout Home Page!</h1>
      </div>
      </div>
      <div class="container-fluid">
    <div class="p-5 my-4 bg-light rounded-3">
        <h1>Welcome to our workout goals section</h1>
        <p class="lead">Here, you can set and monitor your fitness goals, track your progress, 
        and achieve the results you desire. Our app allows you to easily monitor your daily exercises 
        and track your workout history, making it easier than ever to stay on top of your fitness goals. 
        With our app, you can easily input the exercises you've completed throughout the day and keep a track 
        of your workout history. So why wait? Start using our workout goals section and start taking control of your fitness journey!
</p>
    </div>
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${workoutgoals})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <h1 className="text-light">Check out our workout goals tracking features</h1>
    </div>
    <div class="row">
        <div class="col-md-4">
            <h2>Add Workouts</h2>
            <p>With our app, you can easily input your workouts, track your progress, and achieve your fitness goals. Our Add Workout feature is a game-changer, allowing you to input your exercises, intensity, and calories burned, while our system recommends the number of sets and reps for each exercise.</p>
            <p><a href="/workout" class="btn btn-primary">Learn More </a></p>
        </div>
        <div class="col-md-4">
            <h2>Track History</h2>
            <p>Our app's Track Workout feature is designed to help you keep track of your progress and achieve your fitness goals. With this feature, you can easily see a report of all your previous workouts, so you can identify patterns and make adjustments to your fitness routine as needed.</p>
            <p><a href="/track-workout" class="btn btn-primary">Learn More </a></p>
        </div>
        <div class="col-md-4">
            <h2>Share</h2>
            <p>With our app's Sharing feature, you can easily share your workout history to Twitter and let your followers know about your fitness journey. Whether you're proud of your progress or just looking to share your workouts with others, our Sharing feature makes it easy to do so.
</p>
            <p><a onClick = {share} target="_blank" class="btn btn-primary">Share</a></p>
        </div>
    </div>
</div>
    </div>
  );
}

export default WorkoutHome;
