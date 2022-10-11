import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';
import axios from "axios";


function SearchResult(params) {
  let query = new URLSearchParams(window.location.search)
  let keyword = query.get('searched-word')
  const [moviesSeached, setMoviesSeached] = useState([]);

  useEffect(() => {
    const endPoint = (`https://api.themoviedb.org/3/search/movie?api_key=b463aec86cb8756bf7c98134a7166a7f&language=en-US&query=${keyword}`);
    axios.get(endPoint).then(response => {
      const moviesSeachedArray = response.data.results
      if (moviesSeachedArray.length === 0) {
        swAlert(<p>The title you're looking for doesn't exists</p>)
      }
      setMoviesSeached(moviesSeachedArray);
    })
      .catch(error => {
        console.error()
      })
  }, [keyword])


  // https://api.themoviedb.org/3/search/movie?api_key=b463aec86cb8756bf7c98134a7166a7f&language=en-US&page=1&include_adult=false
  return (
    <>
      <h4>You're looking for:<em>{`${keyword}`}</em></h4>

      {moviesSeached.length === 0 && <h4>Not results</h4>}
      <section className='row'>
        {
          moviesSeached.map((oneMovie, idx) => {
            return (
              <div className='col-4' key={idx}>
                <div className='card my-4'>
                  <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className='card-img-top' alt='Movie-poster' />
                  <button
                    className='favorite-btn'
                    role="img"
                    onClick={params.addOrRemoveFav}
                    data-movie-id={oneMovie.id}
                  >
                    <span role="img" aria-label="black-heard">🖤</span>
                  </button>
                  <div className='card-body'>
                    <h5 className='card-titel'>{oneMovie.title.substring(0, 30)}</h5>
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
}

export { SearchResult };