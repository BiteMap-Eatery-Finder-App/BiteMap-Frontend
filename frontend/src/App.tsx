import React from 'react';
import logo from './logo.svg';
import SidePanel from './Components/SidePanel';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function App() {
  return (
    <div className='w-full h-full flex flex-col justify-start bg-white'>
      <div className='bg-lightGray/10'>
        <Navbar/>
      </div>
      <div className='flex flex-row w-full h-full px-10 py-6 justify-between'>
        <div className='flex w-[18%] h-full'>
          <SidePanel/>
        </div>
        <div className='flex w-[80%] h-full'>
          <HomePage/>
        </div>
      </div>
    </div>
  );
}

export default App;
