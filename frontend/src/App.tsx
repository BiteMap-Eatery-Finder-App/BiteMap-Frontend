import React from 'react';
import logo from './logo.svg';
import SidePanel from './Components/SidePanel';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import { MapContainer } from 'react-leaflet';

function App() {
  return (
    <div className='w-full h-full flex flex-row justify-start bg-white'>
      <SidePanel/>
      <div className='flex flex-col w-full h-full'>
        <Navbar/>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
