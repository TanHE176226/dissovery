import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  let Email = '';
  let Password = '';

  function handleEmailChange(event) {
    Email = event.target.value;
  }

  function handlePasswordChange(event) {
    Password = event.target.value;
  }

  function sendRequest() {
    axios
      .post("http://localhost:3000/login", { Email, Password })
      .then(response => {
        if (response && response.data) {
          console.log(response.data);
          navigate('/home');
        } else {
          alert("Login failed");
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2> Sign-In</h2>
        <div className='mb-3'>
          <label htmlFor='email'>
            <strong>Email</strong>
          </label>
          <input
            type='email'
            placeholder='Enter Email'
            name='email'
            onChange={handleEmailChange}
            className='form-control rounded-0'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password'>
            <strong>Password</strong>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            name='password'
            onChange={handlePasswordChange}
            className='form-control rounded-0'
          />
        </div>
        <button onClick={sendRequest} type='submit' className='btn btn-success w-100'>
          <strong>Log in</strong>
        </button>
        <Link
          to='/signup'
          className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default Login;