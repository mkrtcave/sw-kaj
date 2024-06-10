import React, {useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Map, Marker, Popup} from 'https://cdn.esm.sh/react-leaflet';
import * as L from 'leaflet';
import {Icon} from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {icon} from "leaflet/src/layer";

export default function LocMap() {
    useEffect(() => {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
        });

        var container = L.DomUtil.get('map');
        if(container != null){
            container._leaflet_id = null;
        }

        var map = L.map('map').setView([51.5, -0.09], 17);

        map.dragging.enable();

        map.setMaxBounds(null);

        var marker = L.marker([51.5, -0.09], icon(new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]}))) .addTo(map);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

    });
    return(
        <div className="locmap">
            <div id="map">
            </div>
        </div>
    );
};



