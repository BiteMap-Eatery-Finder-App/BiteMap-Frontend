import React, { useEffect, useState } from 'react'
import Map from '../Components/Map'
import axios, { AxiosResponse } from 'axios'
import { url } from '../Endpoints'
import EstablishmentCard from '../Components/EstablishmentCard'
import { Establishment } from '../Models/Establishment'
import SidePanel from '../Components/SidePanel'

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
  
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{        
    setTimeout(()=> {
        setLoading(false);
    },500)        
  },[]);


  if(isLoading){
    return ( 
      <section className="bg-white dark:bg-gray-900">
        <div className='flex flex-col w-full h-full px-10 py-6'>
          <div className='flex flex-row w-full h-full justify-between animate-pulse'>
            <div className='flex w-[18%] h-[500px] bg-gray/60 rounded-md'></div>
            <div className='flex flex-col w-[80%]'>
              <div className='w-full h-[350px] bg-gray/60 rounded-md'></div>
              <div className='flex flex-row w-full h-auto justify-between flex-wrap mt-10'>
                {
                  establishments.map((establishment, index) => (
                    <div className='flex flex-col w-[450px] h-[350px] max-h-[350px] bg-cardWhite rounded-md shadow-md font-mulish justify-evenly relative'>
                      <div className='w-full h-[250px] object-cover rounded-t-md mb-2 bg-gray/60'/>
                      <div className='flex flex-col w-full h-full p-4 justify-between'>
                        <div className='flex flex-col w-full justify-start'>
                          <p className='font-bold bg-gray/60 text-[20px] rounded-lg sm:w-full w-full h-4 mt-4'></p>
                          <p className='font-light bg-gray/60 text-[16px] rounded-lg sm:w-64 w-32 h-2 mt-4'></p>
                          <p className='font-light bg-gray/60 text-[16px] rounded-lg sm:w-64 w-32 h-2 mt-4'></p>
                        </div>
                        <div className='flex w-full justify-end'>
                          <div className='w-[150px] h-[35px] rounded-md bg-gray/60'/>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }else
  return (
    <div className='flex flex-col w-full h-full px-10 py-6'>
      <div className='flex flex-row w-full h-full justify-between'>
        <div className='flex w-[18%] h-full'>
          <SidePanel/>
        </div>
        <div className='flex flex-col w-[80%] h-full'>
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
      </div>
    </div>
  )
}

export default HomePage