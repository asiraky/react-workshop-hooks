import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';

import { StatusBar } from './solution/StatusBar';
import { ToastNotification } from './solution/ToastNotification';
import { StatusMessage } from './solution/StatusMessage';

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
