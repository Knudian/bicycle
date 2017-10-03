import React, { Component, } from 'react';
import {Map, TileLayer} from "react-leaflet";

const position = [47.21806, -1.552778];

export default class AppMap extends Component {

    render(){
        return(
            <Map center={position} zoom={13}>
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>
        )
    }
}