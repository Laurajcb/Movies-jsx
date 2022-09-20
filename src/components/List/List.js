import React from 'react';
import { Link, Navigate } from 'react-router-dom';

 function List() {
  const token = localStorage.getItem('token');

  return (
    <>
      {!token && <Navigate to="/" />}
      <section className='row'>
        <div className='col-3'>
          <div className='card'>
            <img src='...' className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-titel'>Card Title</h5>
              <p className='card-tex'>Some quick text that will goes in the card description, just to make an idea of how is goint to look like.
              </p>
              <Link to='/' className='btn btn-primary'>
                Go to the actuall Film
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};
export { List };
