import React from 'react';
import logo from './logo.svg';
import SidePanel from './Components/SidePanel';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function App() {
  return (
    <div className='w-full h-full flex flex-row justify-start bg-white'>
      <div className='pl-4 pb-4 bg-lightGray/10'>
        <SidePanel/>
      </div>
      <div className='flex flex-col w-full h-full'>
        <div className='flex w-full h-auto'>
          <Navbar/>
        </div>
        <div className='flex w-full h-auto items-center justify-center px-10 py-4'>
          <HomePage/>
        </div>
      </div>
    </div>
  );
}

export default App;
