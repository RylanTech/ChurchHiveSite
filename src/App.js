import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from './pages/Homepage';
import Creators from './pages/Creators';
import SignUp from './pages/SignUp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ChurchHive from './pages/ChurchHive';
import ChurchEventsDispalyPage from './pages/ChurchEventsDisplay';
import CEDeasy from './pages/CED/Easy';
import CEDapi from './pages/CED/API';
import Blank from './pages/CED/Blank';
import Church from './pages/CED/Church';
import Church2 from './pages/CED/Chruch2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/churchhive' element={<ChurchHive/>}/>
        <Route path='/creators' element={<Creators/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route path='/ced' element={<CEDeasy/>}/>

        {/* <Route path='/ced/easy' element={<CEDeasy/>}/>
        <Route path='/ced/api' element={<CEDapi/>}/> */}

        <Route path="/churcheventsdisplay" element={<Blank/>}/>
        <Route path='/churcheventsdisplay/:churchName' element={<Church/>}/>
        <Route path='/churcheventsdisplay/:churchName/:backgroundColor' element={<Church2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
