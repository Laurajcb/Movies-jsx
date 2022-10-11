import React, { useEffect, useState } from 'react';
import { Login } from "./components/Login/Login";
import { List } from "./components/List";
import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Detail } from './components/Detail';
import { SearchResult } from './components/SearchResult';
import { Favorites } from './components/Favorites';
import '../src/css/app.css';



function App() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem('favs');

    if (favsInLocal !== null) {
      const currentFavs = JSON.parse(favsInLocal);
      console.log(currentFavs)
      setFavorites(currentFavs);
    }

  }, []);

  const addOrRemoveFav = (e) => {

    let favMovies = localStorage.getItem('favs');
    let moviesInFavs;

    if (favMovies === null) {
      moviesInFavs = []
    }
    else {
      moviesInFavs = JSON.parse(favMovies);
    }
    console.log(moviesInFavs);

    const btnFav = e.currentTarget
    const buttonFav = btnFav.parentElement;
    const parentFav = buttonFav.parentElement;
    const imgURL = parentFav.querySelector('img').getAttribute('src');
    const title = parentFav.querySelector('h5').innerText;
    const overview = parentFav.querySelector('p').innerText;
    const movieData = {
      imgURL, title, overview,
      id: btnFav.dataset['movieId']
    }
    let isCurrentInfavs = moviesInFavs.find(oneMovie => {
      return oneMovie.id === movieData.id;
    });

    if (!isCurrentInfavs) {
      moviesInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(moviesInFavs));
      setFavorites(moviesInFavs);
      console.log("agregaste a fav")
    } else {
      let removeFromFav = moviesInFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id;
      })
      localStorage.setItem('favs', JSON.stringify(removeFromFav));
      setFavorites(removeFromFav);
      console.log("eliminaste de fav")
    }

  }
  return (
    <>
      <Header favorites={favorites} />
      <div className='container mt-3'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/list' element={<List render={(params) => ({ ...params })} addOrRemoveFav={addOrRemoveFav} />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/searchResult' element={<SearchResult render={(params) => ({ ...params })} addOrRemoveFav={addOrRemoveFav} />} />
          <Route path='/favorites' element={<Favorites render={(params) => ({ ...params })} favorites={favorites} addOrRemoveFav={addOrRemoveFav} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
