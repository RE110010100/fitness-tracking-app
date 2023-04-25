import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [user_type, setUserType] = useState('');
  const [message, setMessage] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleUserIdChange(event) {
    setId(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleUserTypeChange(event) {
    setUserType(event.target.value);
  }


  function handleSubmit(event) {
    event.preventDefault();

    //fetch('https://tvj9b1l42b.execute-api.us-east-2.amazonaws.com/beta-backend/signup-gateway', {
    //  method: 'POST',
    //  headers: { 'Content-Type': 'application/json' },
    //  body: JSON.stringify({ email, id, password, user_type })
    //})
      const id1 = JSON.stringify(id);
      axios.post('https://tvj9b1l42b.execute-api.us-east-2.amazonaws.com/beta-backend/signup-gateway',JSON.stringify({ email, id1, password, user_type }))
      .then(response => {
      console.log(response);
      })
     .catch(error => {
     console.log(error);
  });
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          User ID:
          <input type="text" value={id} onChange={handleUserIdChange} />
        </label>
        <br />
        <label>
          User Type:
          <input type="text" value={user_type} onChange={handleUserTypeChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
