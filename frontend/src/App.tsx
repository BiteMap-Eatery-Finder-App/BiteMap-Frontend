import React from 'react';
import logo from './logo.svg';
import SidePanel from './Components/SidePanel';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='w-full h-full flex flex-col justify-start bg-white'>
      <Navbar/>
      <div className='flex flex-row w-full h-full'>
        <SidePanel/>
      </div>
    </div>
  );
}

export default App;
