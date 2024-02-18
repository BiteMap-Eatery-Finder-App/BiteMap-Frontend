import React, { useEffect, useState } from 'react'
import Map from '../Components/Map'

type Props = {}

const HomePage = (props: Props) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{        
    setTimeout(()=> {
        setLoading(false);
    },1500)        
  },[]);


  if(isLoading){
    return ( 
        <div className='flex flex-col items-center justify-center h-[100vh]'></div> 
      );
  }else
  return (
    <div className='w-full h-[500px]'>
        <Map/>
    </div>
  )
}

export default HomePage