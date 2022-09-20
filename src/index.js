import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
 
import $ from 'jquery';
import Popper from 'popper.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const element = document.getElementById('root');

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  element
);
