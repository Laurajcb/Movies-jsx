import React from 'react';
import { Login } from "./components/Login";
import { List } from "./components/List";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/List' element={<List />} />
      </Routes>
    </>
  );
}

export default App;
