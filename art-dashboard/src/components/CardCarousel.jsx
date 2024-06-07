import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const CarouselCard = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const { title, description, imageUrl } = cards[activeIndex];

  return (
    <Card>
      <CardMedia component="img" height="400" width = "400" image={imageUrl} alt={title} />
      <CardContent>
       <Typography variant="body2">{description}</Typography>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
      <Button onClick={handlePrev}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </Card>
  );
};

// Usage example:
const cardsData = [
  {
    title: 'Modern Wall Decor Framed Painting',
    description: '$199.99',
    imageUrl: 'https://xd.adobe.com/31eca7f2-f5c8-48f2-b795-9073574a4a22.jpg',
  },
  {
    title: 'Modern Wall Decor Framed Painting',
    description: '$199.99',
    imageUrl: 'https://xd.adobe.com/e641dc62-043c-4476-862b-2bcf363e35d8.jpg',
  },
  // Add more cards as needed
];

const App = () => {
  return (
    <div>
      <CarouselCard cards={cardsData} />
    </div>
  );
};

export default App;
