import React, {Component} from 'react';
import AppMap from "./Components/AppMap";
import {Col, Grid, Row} from "react-bootstrap";
import Weather from "./Components/Weather";
import Pollution from "./Components/Pollution";
import MeteoAlerts from "./Components/MeteoAlerts";

class App extends Component {
    render() {
        return (
            <Grid fluid>
                <Row className="map">
                    <Col xs={10}>
                        <AppMap/>
                    </Col>
                    <Col xs={2}>
                        <Weather/>
                        <Pollution/>
                        <MeteoAlerts/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
