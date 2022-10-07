import React from 'react';
import { Login } from "./components/Login/Login";
import { List } from "./components/List";
import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Detail } from './components/Detail';
import { SearchResult } from './components/SearchResult';
import '../src/css/app.css';



function App() {

  let favMovies = localStorage.getItem('favs');
  let moviesInFavs;

  if (favMovies === null) {
    moviesInFavs= []
  }
  else{

  }
  console.log(moviesInFavs)

  const addOrRemoveFav = (e) => {
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
    console.log(movieData);
  }
  return (
    <>
      <Header />
      <div className='container mt-3'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/list' element={<List render={(params) => ({ ...params })} addOrRemoveFav={addOrRemoveFav} />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/searchResult' element={<SearchResult />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
