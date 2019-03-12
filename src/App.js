import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';

import { StatusBar } from './exercise/StatusBar';
import { ToastNotification } from './exercise/ToastNotification';
import { StatusMessage } from './exercise/StatusMessage';

import { ServerMonitorAPI } from './ServerMonitor'

ServerMonitorAPI.subscribe(state => console.log(`The server is ${state ? 'online' : 'offline'}`));

const App = () => {
  return <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">Hooks example app</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <StatusBar />
    </Navbar>
    <Container fluid={true}>
      <Row>
        <Col>
          <StatusMessage /> 
        </Col>
      </Row>
    </Container>
    <ToastNotification />
  </>
};

export default App;
