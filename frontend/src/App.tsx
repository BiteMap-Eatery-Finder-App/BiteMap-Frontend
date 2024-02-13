import React from 'react';
import logo from './logo.svg';
import SidePanel from './Components/SidePanel';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='w-full h-full flex flex-row justify-start bg-white'>
      <SidePanel/>
      <div className='flex flex-row w-full h-full'>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
