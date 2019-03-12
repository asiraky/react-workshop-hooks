/*
  Convert the following class component to a functional component.
*/
import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { ServerMonitorAPI } from '../ServerMonitor';

export class ToastNotification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: null
    };

    this.renderNotification = this.renderNotification.bind(this);
  }

  componentDidMount() {
    ServerMonitorAPI.subscribe(this.renderNotification);
  }

  componentWillUnmount() {
    ServerMonitorAPI.unsubscribe(this.renderNotification);
  }

  renderNotification(state) {
    if (!state) {
      const toastId = toast.error(
        () => <>The server is currently unavailable.</>,
        {
          autoClose: false,
          position: toast.POSITION.BOTTOM_RIGHT
        }
      );
      this.setState({ toastId });
    } else {
      if (this.state.toastId) {
        toast.dismiss(this.state.toastId);
      }
    }
  }

  render() {
    return <ToastContainer />;
  }
}
