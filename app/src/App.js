import React, {Component} from 'react';
import './App.css';
import AppMap from "./Components/AppMap";
import {Col, Grid, Row} from "react-bootstrap";
import Weather from "./Components/Weather";
import Pollution from "./Components/Pollution";

class App extends Component {

    shouldComponentUpdate(){
        return true;
    }

    render() {
        return (
            <Grid fluid>
                <Row className="map">
                    <Col xs={10}>
                        <AppMap/>
                    </Col>
                    <Col xs={2}>
                        <Row>
                            <Weather/>
                        </Row>
                        <Row>
                            <Pollution/>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
