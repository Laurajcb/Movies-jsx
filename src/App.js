import React from 'react';
import { Login } from "./components/Login/Login";
import { List } from "./List";
import { Routes, Route } from "react-router-dom";
import { Header } from './Header';
import { Footer } from './Footer';
import { Detail } from './Detail';
import { SearchResult } from './SearchResult';



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
