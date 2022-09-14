import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';


function Header() {
  return (
    <header>
      <Navbar className='navbar-container'>
        <img src='/assets/film.svg' alt='Logo' className='logo' />
        <Container>
        <Nav className='navbar-menu'>
          <ul>
            <li>
              <Link to='/' className='section-home'>Home</Link>
            </li>
            <li>
              <Link to='/List' className='section-list'>List</Link>
            </li>
            <li>
              <Link to='/Contact' className='section-contact'>Contact</Link>
            </li>
          </ul>
        </Nav>
        </Container>
      </Navbar>
    </header >
  )
}

export { Header };
