import React from 'react';
import { Login } from "./components/Login";
import { List } from "./components/List";
import { Routes, Route } from "react-router-dom";
import { Header } from './Header';
import { Footer} from './Footer';

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/List' element={<List />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
