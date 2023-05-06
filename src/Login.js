import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import './style.css'
import './body.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [user_type, setUserType] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

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

      async function handleSubmit(event) {
        event.preventDefault(); // prevent form submission

        const emailDetails = {
          email : email,
          password : password
        }

      const response = await axios.post(`https://4ypaxteme7.execute-api.us-east-2.amazonaws.com/prod/login-gateway`, JSON.stringify(emailDetails));
      const jsonobj = await JSON.parse(response.data.body);
      console.log(jsonobj.name);

        if (email === jsonobj.email) {
          // set session data
          sessionStorage.setItem('useremail', jsonobj.email);
          sessionStorage.setItem('name',jsonobj.name);
    
          // redirect to home page
          navigate('/Userhome?email=' + encodeURIComponent(email));
        } else {
          setMessage('Invalid email or password');
        }
      }
  
  return (
    <div> 
    <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="card">
      <div class = "card-body p-5" style={{width: '500px'}} >
      <form onSubmit={handleSubmit}>
      <h1 className='text-center mb-3'>Fitness Tracking App</h1>
        <h3 className='text-center mb-3'>Login</h3>
        <br />
        <div class="mb-2">
          <input type="email" id="form2Example1" class="form-control" placeholder='enter your email' value={email} onChange={handleEmailChange} />
          <label class="form-label" for="form2Example1">Email address</label>
        </div>
        <div class="mb-2">
          <input type="password" id="form2Example1.2" class="form-control" placeholder='enter your password' value={password} onChange={handlePasswordChange}/>
          <label class="form-label" for="form2Example1">Password</label>
        </div>
        <div className='d-grid'>
          <button class="btn btn-primary" type="submit">Login</button>
        <br />
        <button><Link to="/SignUp">Dont have an account? sign up here</Link></button>
        </div>
      </form>
      {message && <p>{message}</p>}
      </div>
      </div>
    </div>
    
    </div>
  )
}

export default Login;
