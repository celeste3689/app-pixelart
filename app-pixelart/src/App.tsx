import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TopBar from './views/components/TopBar';
import Registro from './views/Registro';
import Login from './views/Login';
import HomePage from './views/home-page/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={ <Login/> }/>  
          <Route path='/home-page' element={ <HomePage/> }/>  


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
