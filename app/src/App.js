import React, {Component} from 'react';
import './App.css';
import AppMap from "./Components/AppMap";
import {Col, Grid, Row} from "react-bootstrap";
import Weather from "./Components/Weather";

class App extends Component {
    render() {
        return (
            <Grid fluid>
                <Row className="map">
                    <Col xs={10}>
                        <AppMap/>
                    </Col>
                    <Col xs={2}>
                        <Row className="block60"></Row>
                        <Row className="block40">
                            <Weather/>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
