import React, { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom'
import axios from 'axios';

function Detail() {
  let token = sessionStorage.getItem('token');

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get('movieID');
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    let endPoint = (`https://api.themoviedb.org/3/movie/${movieID}?api_key=b463aec86cb8756bf7c98134a7166a7f&language=en-US`)
    axios
      .get(endPoint)
      .then(response => {
        const movieData = response.data;
        setMovie(movieData);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  return (
    <>
      {!token && < Navigate to="/" />}
      {!movie && <p>Loading ...</p>}
      {movie && <>
        <h4>Title: {`${movie.title}`}</h4>
        <section className="row">
          <div className="col-4">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='img-fluid' alt='movie poster' />
          </div>
          <div className="col-8">
            <h5>
              {`Release date: ${movie.release_date}`}
            </h5>
            <h5>{`Rating: ${movie.vote_average}`}</h5>
            <p>
              {`${movie.overview}`}
            </p>
            <h5>Genres:</h5>
            <ul>
              {movie.genres.map(oneGenre => <li key={`${oneGenre.id}`}>{`${oneGenre.name}`}</li>)}
            </ul>
          </div>
        </section>
      </>}

    </>
  )
}

export { Detail };
