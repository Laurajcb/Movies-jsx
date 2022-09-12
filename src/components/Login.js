import React from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

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
        console.log("axios");
        navigate('/List');
      })
  }
  return (
    <>
      <h2> Get into your account</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span> Email Address:</span>
          <input type="text" name="email"></input>
        </label>
        <label>
          <span>Password:</span>
          <input type="password" name="password"></input>
        </label>
        <button type="submit">Login</button>
      </form>
      <a href="https://www.freepik.com/free-vector/forgot-password-concept-illustration_11906379.htm#query=forgot%20password&position=0&from_view=keyword">Forgot your password?</a>
    </>
  )
}

export { Login };
