import React from 'react';
import { withServerStatus } from './withServerStatus';

export function StatusMessage() {
  const isServerOnline = withServerStatus();
  return (
    <p>The server is currenty { isServerOnline ? 'online' : 'offline' }</p>
  );
}