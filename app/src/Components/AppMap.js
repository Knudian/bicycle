import React, {Component,} from 'react';
import {Map, TileLayer} from "react-leaflet";

const position = [47.21806, -1.552778];

export default class AppMap extends Component {

    render(){
        return(
            <Map center={position} zoom={13}>
                <TileLayer
                    url='http://{s}.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png'
                    attribution='&copy; HikeBike by wmflabs.org'
                />
            </Map>
        )
    }
}