import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from './pages/Homepage';
import Creators from './pages/Creators';
import SignUp from './pages/SignUp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ChurchHive from './pages/ChurchHive';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/churchhive' element={<ChurchHive/>}/>
        <Route path='/creators' element={<Creators/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
