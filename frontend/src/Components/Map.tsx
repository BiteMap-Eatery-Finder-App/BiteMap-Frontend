import React, { useState } from 'react';
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

type Props = {}

const Map = (props: Props) => {


    return (
        <div className="w-[400px] h-[400px]">
            <MapContainer center={[45.267136, 19.833549]} zoom={13}>

            </MapContainer>
        </div>
    )
}

export default Map