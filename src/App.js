import React from 'react';
import { Login } from "./components/Login/Login";
import { List } from "./components/List/List";
import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';



function App() {
  return (
    <>
      <Header />
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
