import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const PowerCard = ({ title, value }) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card style={{ backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" style={{ color: '#3f51b5' }}>
            {value}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PowerCard;
