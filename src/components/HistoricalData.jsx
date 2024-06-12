import React from 'react';
import { Typography, Paper } from '@mui/material';

const HistoricalData = () => {
  const historicalData = [
    { time: '10:00', voltage: 70, current: 30, temperature: 65, pressure: 90 },
    { time: '10:05', voltage: 75, current: 35, temperature: 68, pressure: 92 },
    { time: '10:10', voltage: 80, current: 40, temperature: 70, pressure: 95 },
    { time: '10:15', voltage: 85, current: 45, temperature: 72, pressure: 97 },
    { time: '10:20', voltage: 90, current: 50, temperature: 75, pressure: 100 },
    { time: '10:25', voltage: 95, current: 55, temperature: 77, pressure: 102 },
    { time: '10:30', voltage: 100, current: 60, temperature: 80, pressure: 105 }

  ];

  return (
    <Paper style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Historical Data
      </Typography>
      {historicalData.map((data, index) => (
        <Typography key={index} variant="body1" style={{ marginBottom: '10px' }}>
          {data.time} - Voltage: {data.voltage} V, Current: {data.current} A, Temperature: {data.temperature} °C, Pressure: {data.pressure} bar
        </Typography>
      ))}
    </Paper>
  );
};

export default HistoricalData;
