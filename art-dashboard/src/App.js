// App.js

import React from 'react';
import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import CardCarousel from './components/CardCarousel';


function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: 250, bgColor: 'background.default', p: 2 }}>
        <Sidebar />
      </Box>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <MainContent />
        <Box sx={{display: 'flex', justifyContent: 'center',width: '900px'}}>
        <CardCarousel />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
