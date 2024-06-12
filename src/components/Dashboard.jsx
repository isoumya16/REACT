import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import PowerCard from './PowerCard';
import HistoricalData from './HistoricalData';
import Notification from './Notification';

const Dashboard = () => {
  const [powerData, setPowerData] = useState({
    voltage: 0,
    current: 0,
    temperature: 0,
    pressure: 0,
  });
  const [showHistorical, setShowHistorical] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const fetchRealTimeData = () => {
    const newData = {
      voltage: Math.random() * 100,
      current: Math.random() * 50,
      temperature: Math.random() * 50 + 50,
      pressure: Math.random() * 20 + 80,
    };
    setPowerData(newData);
    checkForAlarms(newData);
  };

  const checkForAlarms = (data) => {
    let newNotifications = [];
    if (data.voltage > 90) newNotifications.push('Voltage is too high!');
    if (data.temperature > 90) newNotifications.push('Temperature is too high!');
    setNotifications(newNotifications);
  };

  useEffect(() => {
    const interval = setInterval(fetchRealTimeData, 2000);
    return () => clearInterval(interval);
  });

  return (
    <Container>
      <Typography variant="h2" color="#3f51b5"  gutterBottom>
        Power Plant Monitoring Dashboard
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowHistorical(!showHistorical)}
        style={{ marginBottom: '20px' }}
      >
        {showHistorical ? 'Hide' : 'Show'} Historical Data
      </Button>
      {notifications.length > 0 && <Notification messages={notifications} />}
      <Grid container spacing={3}>
        <PowerCard title="Voltage" value={`${powerData.voltage.toFixed(2)} V`} />
        <PowerCard title="Current" value={`${powerData.current.toFixed(2)} A`} />
        <PowerCard title="Temperature" value={`${powerData.temperature.toFixed(2)} °C`} />
        <PowerCard title="Pressure" value={`${powerData.pressure.toFixed(2)} bar`} />
      </Grid>
      {showHistorical && <HistoricalData />}
    </Container>
  );
};

export default Dashboard;
