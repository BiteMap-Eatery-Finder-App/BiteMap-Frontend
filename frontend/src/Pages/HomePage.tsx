import React, { useEffect, useState } from 'react'
import Map from '../Components/Map'
import axios, { AxiosResponse } from 'axios'
import { url } from '../Endpoints'
import EstablishmentCard from '../Components/EstablishmentCard'
import { Establishment } from '../Models/Establishment'

type Props = {}

const HomePage : React.FC<Props> = (props: Props) : JSX.Element => {

  const [establishments, setEstablishments] = useState<Establishment[]>([])

  const fetchEstablishments = async () => { 
    try {
      axios.get(url)
      .then(response => {
        setEstablishments(response.data);
      }).catch(err => {
        console.log(err);
      })
    } catch (error) {
      console.log("Error fetching data.");
    }
  }

  useEffect(() => {
    fetchEstablishments();
  }, []);

  return (
    <div className='flex flex-col w-full h-full'>
        <div>
          <Map/>
        </div>
        <div className='flex flex-row w-full h-auto justify-between flex-wrap mt-10'>
          {
            establishments.map((establishment, index) => (
              <EstablishmentCard key={index} id={establishment.id} name={establishment.name} description={establishment.description} type={establishment.type}/>
            ))
          }
        </div>
    </div>
  )
}

export default HomePage