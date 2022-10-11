import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';



function List(params) {
  const token = sessionStorage.getItem('token');

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=b463aec86cb8756bf7c98134a7166a7f&language=en-US&page=1'
    axios.get(endPoint)
      .then(response => {
        const apiData = response.data;
        setMovieList(apiData.results)
      })
      .catch(error => {
        swAlert(`Something when wrong, try later\n ${error}`)
      })
  }, [setMovieList]);


  return (
    <>
      {!token && <Navigate to="/" />}

      <section className='row'>
        {
          movieList.map((oneMovie, idx) => {
            return (
              <div className='col-3' key={idx}>
                <div className='card my-4'>
                  <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className='card-img-top' alt='...' />
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
            )
          })
        }
      </section>
    </>
  )
};
export { List };
