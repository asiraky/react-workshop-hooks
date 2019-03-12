/*
  Convert the following class component to a functional component.
*/
import React, { Component } from 'react';
import { ServerMonitorAPI } from '../ServerMonitor';

export class StatusMessage extends Component {
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
      <p>The server is currenty { this.state.isServerOnline ? 'online' : 'offline' }</p>
    );
  }
}