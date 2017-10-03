import React, { Component, } from 'react';
import {PollutionServiceUrl} from "../services";
import {Panel, Row, Table,} from 'react-bootstrap';
import axios from 'axios';

export default class Pollution extends Component {

    constructor(props){
        super(props);

        this.state = {
            pollution : null
        };
    }

    componentWillMount(){
        axios.get(PollutionServiceUrl)
            .then(res => { this.setState({ pollution: res.data.indices[0]}) });
    }

    shouldComponentUpdate(){
        return true;
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
                <Panel header="Air quality" bsStyle="info">
                    <h2 className="text-center">
                        <span className="pollutionLvl" style={{ background: `${p.couleur}` }}>&nbsp;{ p.niveau }&nbsp;</span>
                    </h2>
                    <Table responsive>
                        <tbody>
                            <tr><th><abbr title="Ozone">O<sub>3</sub></abbr></th><td>{ p.O3 }</td></tr>
                            <tr><th><abbr title="Particules fines">PM10</abbr></th><td>{ p.PM10 }</td></tr>
                            <tr><th><abbr title="Dioxyde de soufre">SO<sub>2</sub></abbr></th><td>{ p.SO2 }</td></tr>
                            <tr><th><abbr title="Dioxyde d'azote">NO<sub>2</sub></abbr></th><td>{ p.NO2 }</td></tr>
                        </tbody>
                    </Table>
                </Panel>
            </Row>
        )
    }
}