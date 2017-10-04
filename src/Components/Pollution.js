import React, {Component,} from 'react';
import {PollutionServiceUrl} from "../services";
import {Card, Col, Row, Table,} from 'reactstrap';
import axios from 'axios';

export default class Pollution extends Component {

    constructor(props){
        super(props);

        this.state = {
            pollution : null
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
        axios.get(PollutionServiceUrl)
            .then(res => { this.setState({ pollution: res.data.indices[0]}) });
    }

    componentWillMount(){
        axios.get(PollutionServiceUrl)
            .then(res => { this.setState({ pollution: res.data.indices[0]}) });
    }

    render(){

        let p = {
            O3 : 0,
            PM10 : 0,
            SO2 : 0,
            NO2 : 0,
            niveau : 0,
            couleur : "black"
        };

        if (this.state.pollution !== null){
            p = this.state.pollution;
        }

        return(
            <Row>
                <Col xs={12}>
                    <Card>
                        <h2 className="text-center bg-primary">Air quality</h2>
                        <h2 className="text-center">
                            <span className="pollutionLvl" style={{ background: `${p.couleur}` }}>&nbsp;{ p.niveau }&nbsp;</span>
                        </h2>
                        <Table responsive={true}>
                            <tbody>
                                <tr><th><abbr title="Ozone">O<sub>3</sub></abbr></th><td>{ p.O3 }</td></tr>
                                <tr><th><abbr title="Particules fines">PM10</abbr></th><td>{ p.PM10 }</td></tr>
                                <tr><th><abbr title="Dioxyde de soufre">SO<sub>2</sub></abbr></th><td>{ p.SO2 }</td></tr>
                                <tr><th><abbr title="Dioxyde d'azote">NO<sub>2</sub></abbr></th><td>{ p.NO2 }</td></tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        )
    }
}