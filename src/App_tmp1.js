import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./style.css"

function SignUp() {
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [lastname, setLastName] = useState('');
  const [message, setMessage] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleFirstName(event) {
    setFirstName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLastName(event) {
    setLastName(event.target.value);
  }


  async function handleSubmit(event) {
    event.preventDefault();

    //fetch('https://tvj9b1l42b.execute-api.us-east-2.amazonaws.com/beta-backend/signup-gateway', {
    //  method: 'POST',
    //  headers: { 'Content-Type': 'application/json' },
    //  body: JSON.stringify({ email, id, password, user_type })
    //})
      const SignInDetails = {
        email : email,
        name : firstname,
        password : password,
        lastName : lastname
      }
      axios.post('https://4ypaxteme7.execute-api.us-east-2.amazonaws.com/prod/signup-gateway',JSON.stringify(SignInDetails))
      .then(response => {
      console.log(response);
      })
     .catch(error => {
     console.log(error);
  });
  }

  return (
    <div>
      <div class="d-flex align-items-center justify-content-center vh-100">
      <div class='card'>
      <div class = "card-body p-5" style={{width: '500px'}} >
      <form onSubmit={handleSubmit}>
        <h1 className='text-center mb-3'>Fitness Tracking App</h1>
        <h3 className='text-center mb-3'>Sign Up</h3>
        <div class="mb-2">
        <input class="form-control" type="email" value={email} onChange={handleEmailChange} />
        <label class="form-label">
          Email:
        </label>
        </div>
        <div class="mb-2">
        <input class="form-control" type="text" value={firstname} onChange={handleFirstName} />
        <label class="form-label">
          First Name:
        </label>
        </div>
        
        <div class="mb-2">
        <input class="form-control" type="text" value={lastname} onChange={handleLastName} />
        <label class="form-label">
          Last Name:
        </label>
        </div>
        
        <div class="mb-2">
        <input class="form-control" type="password" value={password} onChange={handlePasswordChange} />
        <label class="form-label">
          Password:
        </label>
        </div>
        <br />
        <div className='d-grid'>
        <button class="btn btn-primary" type="submit">Sign up</button>
        <br />
        <button ><Link to="/Login">Already have an account? sign in here</Link></button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
    </div>
    </div>
  );
}

export default SignUp;
