import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import ReactDOM from 'react-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = ({ map }) => {
    return(
        <div>
            <h1>Map</h1>
            <p>{ map.title }</p>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id="mapid">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
        
    );
}

export default Map;