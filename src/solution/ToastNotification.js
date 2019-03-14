import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { ServerMonitorAPI } from '../ServerMonitor';

export function ToastNotification() {
  const [toastId, setToastId] = useState(null);

  useEffect(() => {
    ServerMonitorAPI.subscribe(renderNotification);
    return () => {
      ServerMonitorAPI.unsubscribe(renderNotification);
    }
  });

  function renderNotification(state) {
    if (!state) {
      const toastId = toast.error(
        () => <>The server is currently unavailable.</>,
        {
          autoClose: false,
          position: toast.POSITION.BOTTOM_RIGHT
        }
      );
      setToastId(toastId);
    } else {
      if (toastId) {
        toast.dismiss(toastId);
      }
    }
  }

  return <ToastContainer />;
}
