import React, { useEffect, useState } from 'react';
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = ({width, height, shadow, allowZoom, zoom}) => {

    const [Latitude, setLatitude] = useState(Number);
    const [Longitude, setLongitude] = useState(Number);

    const icon = L.icon({ 
        iconRetinaUrl:iconRetina, 
        iconUrl: iconMarker, 
        shadowUrl: iconShadow, 
        iconSize: [25,41], 
        iconAnchor: [12,41]
    });

    useEffect(() => { 
        setLatitude(45.267136);
        setLongitude(19.833549);
    }, []);

    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{        
      setTimeout(()=> {
          setLoading(false);
      })        
    },[]);
  
  
    if(isLoading){
      return ( 
        <section className="bg-white dark:bg-gray-900">
            <div className="w-full h-[350px] bg-gray/60 flex rounded-md animate-pulse"/>
        </section>
        );
    }else
    return (
        <div className={`w-full h-auto flex rounded-md ${shadow} z-[1]`}>
            <MapContainer 
                className={`w-${width} h-[${height}px] rounded-md`} 
                center={[Latitude, Longitude]} // Postavite centar mape na istu poziciju kao i marker
                attributionControl={true}
                zoom={zoom}
                minZoom={3}
                maxZoom={19}
                scrollWheelZoom={allowZoom}
                zoomControl={true}
                easeLinearity={0.35}
                dragging={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[Latitude,Longitude]}  icon={icon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map