import React, {Component,} from 'react';
import {Col, Row} from "react-bootstrap";
import axios from 'axios';
import {WeatherServiceUrl} from "../services";
import arrow from './../arrow.svg';

const kelvin2celcius = (kelvin) => {
    if( kelvin === null || kelvin === undefined){
        return 0.00;
    }
    return (kelvin -273.15).toPrecision(3);
};

const mps2kmh = (mps) => {
    return (mps *3.6).toPrecision(3);
};

export default class Weather extends Component {

    constructor(props){
        super(props);

        this.state = {
            weather : null
        }
    }

    componentWillMount(){
        axios.get(WeatherServiceUrl)
            .then(res => { this.setState({ weather: res.data}) });
    }

    shouldComponentUpdate(){
        return true;
    }

    render(){
        let w = {
            base :'',
            clouds : {
                all : 0,
            },
            cod : 0,
            coord : {
                lat : 0.0,
                lon : 0.0,
            },
            dt : 0,
            id : 0,
            main : {
                humidity : 0,
                pressure : 0,
                temp : 0.0,
                temp_min : 0.0,
                temp_max : 0.0,
            },
            name : '',
            sys : {
                country : '',
                id : 0,
                message : 0.0,
                sunrise : 0,
                sunset  : 0,
                type : 0
            },
            visibility : 0,
            weather : [
                {
                    icon : '04d'
                }
            ],
            wind : {
                deg : 0,
                speed : 0.0
            }
        };

        let icon = '',
            rotate = 'rotate(0deg)';
        if (this.state.weather !== null) {
            w = this.state.weather;
            if( w.weather !== undefined) {
                icon = 'http://openweathermap.org/img/w/' + w.weather[0].icon + '.png';
            }
            rotate = 'rotate(' + (w.wind.deg + 180) + 'deg)';
        }
        return(
            <Row>
                <Col xs={12}>
                    <h1 className="text-center page-header">{ w.name }</h1>
                </Col>
                <Col xs={12} className="text-center">
                    <img alt="Forecast icon" src={ icon } title="Forecast overview"/>
                </Col>
                <Col xs={12} className="text-center">
                    <p><img style={{ transform: rotate }} src={ arrow } className="arrow" alt="Wind direction" title="Wind direction"/></p>
                    <p>{ mps2kmh(w.wind.speed) + 'km/h (' + w.wind.deg +'°)' }</p>
                </Col>
                <Col xs={4} className="text-center"><h3><small title="Minimal temperature">{ kelvin2celcius(w.main.temp_min) }°C</small></h3></Col>
                <Col xs={4} className="text-center"><h3 title="Average temperature">{ kelvin2celcius(w.main.temp) }°C</h3></Col>
                <Col xs={4} className="text-center"><h3><small title="Maximal temperature">{ kelvin2celcius(w.main.temp_max) }°C</small></h3></Col>
            </Row>
        );
    }
}