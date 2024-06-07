import React from 'react';
import { Card, CardContent, Avatar } from '@mui/material';

const ArtistCard = ({ artistImage, photographyImage, artistName, photographyDescription }) => {
  return (
    <Card>
      <Avatar src={artistImage} alt={`Profile of ${artistName}`} />
      <img src={photographyImage} alt={photographyDescription} style={{ position: 'absolute', top: 0, left: 0 }} />
      {/* Other card content */}
      <CardContent>
        <p>{artistName}</p>
        <p>{photographyDescription}</p>
        {/* Additional content */}
      </CardContent>
    </Card>
  );
};

export default ArtistCard;