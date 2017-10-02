import React, { Component, } from 'react';
import {Col, Row} from "react-bootstrap";
import axios from 'axios';

export default class Pollution extends Component{

    constructor(props){
        super(props);

        this.state = { pollution : null};
    }

    componentWillMount(){
        axios.get('http://localhost:3002/pollution')
            .then(res => { console.log(res.data); return res})
            .then(res => { this.setState({ pollution: res.data }) });
    }

    render(){

        let pollution = {
            index : 0,
            color : 'red'
        };
        return(
            <Row>
                <Col xs={12} className="text-center">
                    <span className="pollutionIndex" style={{ color: pollution.color }}>{ pollution.index}</span>
                </Col>
            </Row>
        )
    }
}