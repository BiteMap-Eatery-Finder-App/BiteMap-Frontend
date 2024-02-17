import React, { useEffect, useState } from 'react';
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

type Props = {}

const Map = (props: Props) => {

    const [Latitude, setLatitude] = useState(Number);
    const [Longitude, setLongitude] = useState(Number);
    const [isLoading, setLoading] = useState(true);

    /*const icon = L.icon({ 
        iconRetinaUrl:iconRetina, 
        iconUrl: iconMarker, 
        shadowUrl: iconShadow, 
        iconSize: [25,41], 
        iconAnchor: [12,41]
    });

    useEffect(() => { 
        setLatitude(45.267136);
        setLongitude(19.833549);
    }, []);*/

    useEffect(()=>{        
      setTimeout(()=> {
          setLoading(false);
          loadMap();
      },1500)        
    },[]);
  
  
    const loadMap =  async() => {
        var map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }

    if(isLoading){
      return ( 
          <div className='flex flex-col items-center justify-center h-[100vh]'></div> 
        );
    }else
    return (
        <div id='map' className="w-[400px] h-[400px] flex">
        </div>
    )
}

export default Map