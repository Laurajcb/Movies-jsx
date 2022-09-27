import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Search } from '../Search/Search';

import ReactLogo from '../../assets/film.svg';

function Header() {
  return (
    <header>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <img src={ReactLogo} alt='Logo' className='logo' />
          <button
            className='navbar-toggler collapsed'
            type='button'
            data-bs-toggle="collapse"
            data-bs-target='#main-menu'
            aria-controls='main-menu'
            arial-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='navbar-collapse collapse'
            id='main-menu'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>

              <li className='nav-item'>
                <Link to='/list' className="nav-link">List</Link>
              </li>

              <li className='nav-item'>
                <Link to='/contact' className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
          < Search />
        </div>
      </nav>
    </header >
  )
}

export { Header };
