import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TopBar from './views/components/TopBar';
import Register from './views/register/Register';
import Login from './views/Login';
import HomePage from './views/home-page/HomePage';
import DrawView from './views/draw-view/DrawView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={ <Login/> }/>  
          <Route path='/home-page' element={ <HomePage/> }/> 
          <Route path='/register' element={ <Register/> }/> 
          <Route path='/draw-panel' element={ <DrawView/> }/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
