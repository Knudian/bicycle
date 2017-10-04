import React, {Component} from 'react';
import AppMap from "./Components/AppMap";
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from "reactstrap";
import axios from 'axios';
import Weather from "./Components/Weather";
import Pollution from "./Components/Pollution";
import MeteoAlerts from "./Components/MeteoAlerts";
import {RobberiesServiceUrl} from "./services";

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            showModal : false,
            latitude : 0.0,
            longitude : 0.0,
            description : ''
        };

        this.toggle  = this.toggle.bind(this);
        this.addRobbery  = this.addRobbery.bind(this);
        this.handleLatitudeChange = this.handleLatitudeChange.bind(this);
        this.handleLongitudeChange = this.handleLongitudeChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.addRobberyFromMap = this.addRobberyFromMap.bind(this);
    }

    toggle(){
        this.setState({ showModal : !this.state.showModal });
    }
    addRobbery(){

        let values = this.state;
        delete values.showModal;
        axios.post(RobberiesServiceUrl, values)
            .then(() => {
                this.setState({
                    latitude : 0.0,
                    longitude : 0.0,
                    description : '',
                    showModal : false
                });
            });
    }
    addRobberyFromMap(d){
        this.setState({
            latitude : d.lat,
            longitude : d.lng,
            description : '',
            showModal : true
        });
    }
    handleLatitudeChange(event){
        this.setState({latitude: event.target.value});
    }
    handleLongitudeChange(event){
        this.setState({longitude: event.target.value});
    }
    handleDescriptionChange(event){
        this.setState({description: event.target.value});
    }

    render() {

        return (
            <Container fluid>
                <Row className="map">
                    <Col xs={10} sm={9}>
                        <AppMap addPoint={ this.addRobberyFromMap }/>
                    </Col>
                    <Col xs={2} sm={3}>
                        <Weather/>
                        <Pollution/>
                        <MeteoAlerts/>
                        <Row>
                            <Col>
                                <Button block color="danger" onClick={ this.toggle }>Add a robbery</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Modal isOpen={this.state.showModal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label for="latitude" sm={2}>Latitude</Label>
                                <Col sm={10}>
                                    <Input type="number" name="latitude" id="latitude" value={this.state.latitude} onChange={this.handleLatitudeChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="longitude" sm={2}>Longitude</Label>
                                <Col sm={10}>
                                    <Input type="number" name="longitude" id="longitude" value={this.state.longitude} onChange={this.handleLongitudeChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="description" sm={2}>Description</Label>
                                <Col sm={10}>
                                    <Input type="text" name="description" id="description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="default" onClick={this.toggle}>Cancel</Button>{' '}
                        <Button color="danger" onClick={this.addRobbery}>Add it !</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default App;
