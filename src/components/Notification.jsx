import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const Notification = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <Snackbar key={index} open autoHideDuration={6000}>
          <Alert severity="warning">{message}</Alert>
        </Snackbar>
      ))}
    </div>
  );
};

export default Notification;
