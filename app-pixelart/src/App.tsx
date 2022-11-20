import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TopBar from './views/components/TopBar';
import Registro from './views/Registro';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={ <Login/> }/>  
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
