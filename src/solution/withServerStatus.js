import { useState, useEffect } from 'react';
import { ServerMonitorAPI } from '../ServerMonitor';

export function withServerStatus() {
  const [isServerOnline, setIsServerOnline] = useState(null);

  function handleStatusChange(status) {
    setIsServerOnline(status);
  }

  useEffect(() => {
    ServerMonitorAPI.subscribe(handleStatusChange);
    return () => {
      ServerMonitorAPI.unsubscribe(handleStatusChange);
    };
  });

  return isServerOnline;
}