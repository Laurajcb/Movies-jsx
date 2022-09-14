import React from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  // prev useHistory()
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();


    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email === '' || password === '') {
      swAlert(
        <h2>Filds can't be empty</h2>
      )
      return;
    }
    if (email !== '' && !regexEmail.test(email)) {
      swAlert(
        <h2>You should use a valid email addrees</h2>
      );
      return;
    }
    if (email !== 'challenge@alkemy.org' || password !== 'react') {
      swAlert(
        <h2>Invalid login credentials</h2>
      )
      return;
    }
    swAlert(
      <h2>Perfect you're in! </h2>
    )
    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/List');
      })
  }
  return (
    <>
      <div className='login-container'>
        <h2> Get into your account</h2>
        <form onSubmit={submitHandler} className='login-form'>
          <label>
            <span>Email Address</span>
          </label>
          <input type="text" name="email"></input>

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
