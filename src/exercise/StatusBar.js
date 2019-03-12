/*
  Convert the following class component to a functional component.
*/
import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';

import { ServerMonitorAPI } from '../ServerMonitor';

export class StatusBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isServerOnline: null
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  handleStatusChange(status) {
    this.setState({ isServerOnline: status });
  }

  componentDidMount() {
    ServerMonitorAPI.subscribe(this.handleStatusChange);
  }

  componentWillUnmount() {
    ServerMonitorAPI.unsubscribe(this.handleStatusChange);
  }

  render() {
    return (
      <Badge variant={this.state.isServerOnline ? 'success' : 'danger'}>
        {this.state.isServerOnline ? "Online" : "Offline"}
      </Badge>
    );
  }
}