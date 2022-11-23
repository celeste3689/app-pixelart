import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './views/Login';
import DimensionView from './views/dimension-view/DimensionView';
import DrawView from './views/draw-view/DrawView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path='/dimension-view' element={<DimensionView/>}/>
          <Route path='/draw-view' element={<DrawView/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
