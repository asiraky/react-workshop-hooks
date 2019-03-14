import React from 'react';
import { Badge } from 'react-bootstrap';
import { withServerStatus } from './withServerStatus';

export function StatusBar() {
  const isServerOnline = withServerStatus();
  return (
    <Badge variant={isServerOnline ? 'success' : 'danger'}>
      {isServerOnline ? "Online" : "Offline"}
    </Badge>
  );
}