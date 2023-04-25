import React, { useState } from 'react';
import axios from 'axios';
import './SignupPage.css'

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('https://example.com/api/signup', formData)
      .then(response => {
        console.log(response);
        // Redirect to the user's profile page or login page
      })
      .catch(error => {
        console.log(error);
        // Display an error message to the user
      });
  };

  return (
    <div className="signup-page">
      <form style={{ width: '500px' }} onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
