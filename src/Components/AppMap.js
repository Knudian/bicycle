import React, {Component,} from 'react';
import { Map, Marker, Popup, TileLayer,} from "react-leaflet";
import axios from 'axios';
import {RobberiesServiceUrl} from "../services";
import L from 'leaflet';
import PropTypes from 'prop-types';

const position = [47.21806, -1.552778];

const markerIcon = L.icon({
    iconUrl: '/leaflet/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 0],
    popupAnchor: [12, 20],
    shadowUrl: '/leaflet/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12, 0]
});

export default class AppMap extends Component {

    constructor(props){
        super(props);
        this.state = {
            robberies : null
        };

        this.timerID = null;

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){
        axios.get(RobberiesServiceUrl)
            .then(res => { this.setState({ robberies: res.data })});
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        axios.get(RobberiesServiceUrl)
            .then(res => { this.setState({ robberies: res.data })});
    }

    handleClick(event){
        this.props.addPoint(event.latlng);
    }

    render(){
        let markers = [];
        if ( this.state.robberies !== null){

            markers = this.state.robberies.map((r, idx) => {
                return (<Marker key={`marker-${idx}`} position={ [r.latitude, r.longitude] } icon={ markerIcon }>
                    <Popup>
                        <span>{ r.description }</span>
                    </Popup>
                </Marker>)
            });
        }
        return(
            <Map center={position} zoom={17} onClick={ this.handleClick }>
                <TileLayer url='http://{s}.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png'/>
                { markers }
            </Map>
        )
    }
}

AppMap.propTypes = {
    addPoint : PropTypes.func.isRequired,
}