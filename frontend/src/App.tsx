import React from 'react';
import logo from './logo.svg';
import SidePanel from './Components/SidePanel';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VisitEstablishmentPage from './Pages/VisitEstablishmentPage';
import LoginPage from './Pages/SignInPage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-full flex flex-col justify-start bg-white'>
        <div className='bg-lightGray/10'>
          <Navbar/>
        </div>

        <Routes>
          <Route path="/" Component = {HomePage}/>
          <Route path='/Establishment/:establishmentId' Component={VisitEstablishmentPage}/>
          <Route path='/SignIn' Component={SignInPage}/>
          <Route path='/SignUp' Component={SignUpPage}/>
        </Routes>
        
        <div>
          <hr className='w-full text-lightGray'></hr>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
