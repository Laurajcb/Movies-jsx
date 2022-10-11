import React from 'react'
import { Link, Navigate } from 'react-router-dom';

function Favorites(params) {
  const token = sessionStorage.getItem('token');

  return (
    <>
      {!token && <Navigate to="/" />}
      {!params.favorites.length && <div className='col-12 text-danger'> Add movies to favorites!</div>}
      <section className='row'>
        <h4>Your favorites: </h4>
        {
          params.favorites.map((oneMovie, idx) => {
            return (
              <>
                <div className='col-3' key={idx}>
                  <div className='card my-4'>
                    <img src={oneMovie.imgURL} className='card-img-top' alt='...' />
                    <button
                      className='favorite-btn'
                      role="img"
                      onClick={params.addOrRemoveFav}
                      data-movie-id={oneMovie.id}
                    >
                      <span role="img" aria-label="black-heard">🖤</span>
                    </button>
                    <div className='card-body'>
                      <h5 className='card-titel'>{oneMovie.title.substring(0, 20)}</h5>
                      <p className='card-tex'>{oneMovie.overview.substring(0, 80)}...
                      </p>
                      <Link to={`/detail?movieID=${oneMovie.id}`} className='btn btn-primary'>
                        View detail
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </section>
    </>
  )
}

export { Favorites };
