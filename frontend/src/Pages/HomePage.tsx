import React, { useEffect, useState } from 'react'
import Map from '../Components/Map'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='w-full h-[500px]'>
        <Map/>
    </div>
  )
}

export default HomePage