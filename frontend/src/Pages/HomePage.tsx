import React, { useEffect, useState } from 'react'
import Map from '../Components/Map'
import axios, { AxiosResponse } from 'axios'
import { url } from '../Endpoints'
import EstablishmentCard from '../Components/EstablishmentCard'

type Props = {}

const HomePage = (props: Props) => {

  const [establishments, setEstablishments] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then((response: AxiosResponse<any>) => {
        setEstablishments(response.data);
      })
  }, [])
 
  return (
    <div className='w-full h-full'>
        <Map/>
        <div className='flex flex-row w-full h-auto justify-between flex-wrap'>
          {
            establishments.map((establishment) => (
              //<EstablishmentCard Name={establishment.Name} Description={establishment.Description} Type={establishment.Type}></EstablishmentCard>
              <EstablishmentCard Name="aa" Description="ee" Type={2}></EstablishmentCard>
            ))
          }
        </div>
    </div>
  )
}

export default HomePage