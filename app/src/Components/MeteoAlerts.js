import React, { Component, } from 'react';
import { Row, } from 'react-bootstrap';
import axios from 'axios';
import {WeatherAlertServiceUrl} from "../services";
import FontAwesome from 'react-fontawesome';

const colors = [
    'black',
    'green',
    'yellow',
    'orange',
    'red'
];

export default class MeteoAlerts extends Component
{
    constructor(props){
        super(props);

        this.state = {
            dep  : '',
            coul : 0
        };
    }

    shouldComponentUpdate(){
        return true;
    }

    componentWillMount(){
        axios.get(WeatherAlertServiceUrl)
            .then(res => {
                let dep = res.data._attributes.dep;
                let coul = res.data._attributes.coul;
                this.setState({ dep : dep, coul : coul });
            });
    }

    render(){
        return(
            <Row>
                <p className="text-center">
                    <FontAwesome
                        name='flag'
                        size='10x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color : `${colors[this.state.coul]}` }}
                        />
                </p>
            </Row>
        )
    }
}