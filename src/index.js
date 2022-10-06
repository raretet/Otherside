import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import './index.sass';
import Explore from './pages/Explore/Explore';
import Litepaper from './pages/Litepaper/Litepaper';
import Obelisk from './pages/Obelisk/Obelisk';
import Odk from './pages/Odk/Odk';
import Otherpage from './pages/Otherpage/Otherpage';
import World from './pages/World/World';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Otherpage/>}/>
      <Route path='/world' element={<World/>}/>
      <Route path='/obelisk' element={<Obelisk/>}/>
      <Route path='/litepaper' element={<Litepaper/>}/>
      <Route path='/explore' element={<Explore/>}/>
      <Route path='/odk' element={<Odk/>}/>
    </Routes>
  </BrowserRouter> 
);