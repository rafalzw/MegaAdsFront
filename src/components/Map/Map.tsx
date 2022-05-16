import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import '../../utils/fix-map-icon';
import 'leaflet/dist/leaflet.css';
import './Map.css';

export const Map = () => {
    return (
        <div className="map">
            <MapContainer center={[50.2657152, 18.9945008]} zoom={15}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[50.2657152, 18.9945008]}>
                    <Popup>
                        <h2>IT.focus</h2>
                        <p>Firma programistyczna</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}