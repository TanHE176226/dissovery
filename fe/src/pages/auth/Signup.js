import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



function Sginup() {

    const navigate = useNavigate();

    let FirstName = '';

    let LastName = '';

    let Email = '';

    let Password = '';

    function handleFirstNameChange(event) {
        FirstName = event.target.value;
    }
    
    function handleLastNameChange(event) {

        LastName = event.target.value;

    }

    function handleEmailChange(event) {
        Email = event.target.value;
    }

    function handlePasswordChange(event) {
        Password = event.target.value;
    }

    function sendRequest() {

        axios
            .post("http://localhost:3001/signup", { FirstName, LastName, Email, Password })

            .then(response => {

                if (response && response.data) {

                    console.log(response.data);

                    navigate('/');

                } else {

                    alert("signup failed");
                }
            })
            
            .catch(error => console.log(error));
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2> Sign-up</h2>
                <div className='row'>
                    <div className='col md-6'>
                        <div className='mb-3'>
                            <label htmlFor='name'>
                                <strong>FirstName</strong>
                            </label>
                            <input
                                type='name'
                                placeholder='Enter First'
                                name='name'
                                onChange={handleFirstNameChange}
                                className='form-control rounded-0'
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='name'>
                                <strong>LastName</strong>
                            </label>
                            <input
                                type='name'
                                placeholder='Enter LastName'
                                name='name'
                                onChange={handleLastNameChange}
                                className='form-control rounded-0'
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>

                        <strong>Enter Email</strong>
                        
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
                    <strong>Sginup</strong>

                </button>
                <Link
                    to='/'

                    className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
                >
                    Login
                </Link>

            </div>

        </div>
    );
}

export default Sginup;