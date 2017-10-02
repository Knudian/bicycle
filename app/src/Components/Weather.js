import React, { Component, } from 'react';
import {Row} from "react-bootstrap";
import axios from 'axios';

const kelvin2celcius = (kelvin) => {
    return (parseFloat(kelvin) - 273.15).toPrecision(3);
};

const mps2kmh = (speed) => {
    return (speed *3.6).toPrecision(3);
}

export default class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: null,
        };
    }

    componentWillMount(){
        axios.get('http://localhost:3001/meteo')
            .then(res => { console.log(res.data); return res})
            .then(res => { this.setState({ weather: res.data, loaded : true }) });
    }

    shouldComponentUpdate(){
        return true;
    }

    render(){

        let w = {
            coord : {
                lon: 0.0,
                lat: 0.0
            },
            weather :[],
            main :{
                temp : 0.0,
                pressure : 0,
                humidity : 0,
                temp_min:0.0,
                temp_max:0.0
            },
            visibility :0,
            wind:{
                speed :0.0,
                deg : 0,
            },
            clouds: {
                all :0,
            },
            base : '',
            dt : 0,
            sys: {
                type:0,
                id:0,
                message:'',
                country:'',
                sunrise:'',
                sunset:'',
            },
            id:0,
            name:'',
            cod:0,
        };
        let windDirection = '';
        let wIcon = '';
        if (this.state.weather !== null){
            w = this.state.weather;
            windDirection = 'rotate('+w.wind.deg + 'deg)';
            wIcon = 'http://openweathermap.org/img/w/' + w.weather[0].icon +'.png'
        }

        return(
            <Row>
                <h2 className="page-header text-center">{ w.name }<br/><img src={wIcon} alt="Weather icon"/></h2>
                <h2 className="text-center"><span style={{ transform: windDirection }}>&larr;</span></h2>
                <p className="text-center">{ mps2kmh(w.wind.speed) }  km/h</p>
                <h4 className="text-center">
                    <small>{ kelvin2celcius(w.main.temp_min) }</small>&nbsp;
                    { kelvin2celcius(w.main.temp) }&nbsp;
                    <small>{ kelvin2celcius(w.main.temp_max) }</small>
                </h4>
            </Row>
        );
    }
}