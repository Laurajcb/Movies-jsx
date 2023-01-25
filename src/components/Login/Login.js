import React from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate, Navigate } from 'react-router-dom';
import '../../css/Login.css';

function Login() {
  // prev useHistory()
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();


    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === '' || password === '') {
      swAlert(
        <h2>Filds can't be empty</h2>
      )
      return;
    }
    
    if (username !== 'kminchelle' || password !== '0lelplR') {
      swAlert(
        <h2>Invalid login credentials</h2>
      )
      return;
    }

    axios
      .post('https://dummyjson.com/auth/login', { username, password })
      .then(response => {
        const token = response.data.token;
        sessionStorage.setItem('token', token);
        console.log(response.data.token);
        navigate('/list');
      })
      .catch((err) => {
        console.error(err);
      })

  }
  let token = sessionStorage.getItem('token');
  return (
    <>
      {token && <Navigate to="/list" />}
      <div className='login-container'>
        <h2> Get into your account</h2>
        <form onSubmit={submitHandler} className='login-form'>
          <label>
            <span>User Name</span>
          </label>
          <input type="text" name="username"></input>

          <label>
            <span>Password</span>
          </label>
          <input type="password" name="password"></input>

          <button type="submit" className='primary-btn'>Login</button>

          <a href="https://www.freepik.com/free-vector/forgot-password-concept-illustration_11906379.htm#query=forgot%20password&position=0&from_view=keyword" className='link'>Forgot password</a>
        </form>

      </div>
    </>
  )
}

export { Login };
