import React, { Component, } from 'react';
import {Card, Col, Row,} from 'reactstrap';
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

export default class MeteoAlerts extends Component {
    constructor(props){
        super(props);

        this.state = {
            dep  : '',
            coul : 0
        };

        this.timerID = null;
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
        axios.get(WeatherAlertServiceUrl)
            .then(res => {
                let dep = res.data._attributes.dep;
                let coul = res.data._attributes.coul;
                this.setState({ dep : dep, coul : coul });
            });
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
                <Col>
                    <Card>
                        <span className="text-center">
                            <FontAwesome
                                className="fa-10x"
                                name='flag'
                                size='lg'
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color : `${colors[this.state.coul]}` }}
                                />
                        </span>
                    </Card>
                </Col>
            </Row>
        )
    }
}