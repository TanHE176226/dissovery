

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  }

  function validatePassword(password) {
    return password.trim() !== '';
  }

  function handleEmailChange(event) {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setEmailError('');
  }

  function handlePasswordChange(event) {
    const inputValue = event.target.value;

    setPassword(inputValue);
    setPasswordError('');
  }

  function sendRequest() {
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('check your email or password');
      isValid = false;
    }

    if (!validatePassword(password)) {
      setPasswordError('password is not empty');
      isValid = false;
    }

    if (isValid) {
      axios
        .post('http://localhost:3000/login', { email, password })
        .then((response) => {
          if (response && response.data) {
            console.log(response.data);
            navigate('/home');
          } else {
            alert('Login failed');
          }
        })
        .catch((error) => console.log(error));
    }
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
            value={email}
            onChange={handleEmailChange}
            className='form-control rounded-0'
          />
          {emailError && <p className='text-danger'>{emailError}</p>}
        </div>
        <div className='mb-3'>
          <label htmlFor='password'>
            <strong>Password</strong>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
            className='form-control rounded-0'
          />
          {passwordError && <p className='text-danger'>{passwordError}</p>}
        </div>
        <button
          onClick={sendRequest}
          type='submit'
          className='btn btn-success w-100'
        >
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
