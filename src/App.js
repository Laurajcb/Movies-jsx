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
  return (
    <>
      <Header />
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/list' element={<List />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/searchResult' element={<SearchResult />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
