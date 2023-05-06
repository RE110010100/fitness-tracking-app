import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import nutrition from './nutrtion.jpeg';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function NutritionHome() {

  const share = async () => {
    console.log("button clicked");
    const email = {

      nutrition : "y"
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
        <a href="/nutritionhome" class="nav-item nav-link active">Nutrition</a>
        <a href="/workouthome" class="nav-item nav-link">Workout Goals</a>
        <a href="/bodymeasurements" class="nav-item nav-link">Body Measurements</a>
        <a href="/fitness-goals" class="nav-item nav-link">Fitness Goals</a>
        <a href="/Login" class="nav-item nav-link">Logout</a>
    </nav>
    </div>
      <div class="m-2">
      <div class="col text-center">
      <h1>Welcome to your Nutrition Home Page!</h1>
      </div>
      </div>
      <div class="container-fluid">
    <div class="p-5 my-4 bg-light rounded-3">
        <h1>Track your everyday meals here</h1>
        <p class="lead">Are you looking to take control of your diet and achieve your health goals? Our app has you covered. With our nutrition tracking feature, you can easily monitor the food you eat on a daily basis and track your nutrition history over time.

Whether you're trying to lose weight, build muscle, or simply improve your overall health, our app's nutrition tracking feature can help you get there. With our easy-to-use interface, you can log your meals in seconds.

So why wait? Start using our nutrition tracking feature today and take the first step towards a healthier, happier you!</p>
    </div>
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${nutrition})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <h1 className="text-light">Check out our nutrition tracking features</h1>
    </div>
    <div class="row">
        <div class="col-md-4">
            <h2>Add Nutrition</h2>
            <p>Our app's meal tracking feature makes it easy to monitor the meals you eat every day and track the calories and quantity of each meal. With our app, you can easily log your meals and track your progress over time.</p>
            <p><a href="/nutrition" class="btn btn-primary">Learn More</a></p>
        </div>
        <div class="col-md-4">
            <h2>Track History</h2>
            <p>Are you looking for an easy way to keep track of your eating habits and make healthier choices? Our app's meal reporting feature provides a comprehensive report of all the meals you have consumed, giving you valuable insights into your dietary habits.</p>
            <p><a href="/track-nutrition" class="btn btn-primary">Learn More</a></p>
        </div>
        <div class="col-md-4">
            <h2>Bootstrap</h2>
            <p>With our app's Sharing feature, you can easily share your nutrition history to Twitter and let your followers know about your healthy eating habits. Whether you're proud of your progress or just looking to share your meals with others, our Sharing feature makes it easy to do so.</p>
            <p><a onClick={share} class="btn btn-primary">Share</a></p>
        </div>
    </div>
    <hr />
</div>
    </div>
  );
}

export default NutritionHome;
