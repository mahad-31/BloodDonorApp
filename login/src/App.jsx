import React from 'react';

import Login from './Login';
import Register from './Register';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
