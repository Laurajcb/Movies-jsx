import React from 'react';
import { Login } from "./components/Login/Login";
import { List } from "./components/List/List";
import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Footer} from './components/Footer/Footer';



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
