import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';

// Importing custom images
import ImageGallery1 from '../assets/img-gallery-1.jpg';
import ImageGallery2 from '../assets/img-gallery-2.jpg';
import ImageGallery3 from '../assets/img-gallery-3.jpg';
import ImageGallery4 from '../assets/img-gallery-4.jpg';

import ArtistProfilePic1 from '../assets/artist-1.jpg';
import ArtistProfilePic2 from '../assets/artist-2.jpg';
import ArtistProfilePic3 from '../assets/artist-3.jpg';
import ArtistProfilePic4 from '../assets/artist-4.jpg';

export default function TitlebarImageList() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      
      <Box sx={{ margin: '20px 0px' }}>
        <Button variant="contained" color="success">BECOME A SELLER</Button>
      </Box>
      
      <Box sx={{ margin: '20px 0px' }}>
        <Typography>Artists & Photographers</Typography>
      </Box>

      <List sx={{ width: '100%', maxWidth: 360 }}>
        {itemData.map((item) => (
          <ListItem key={item.author} sx={{ marginBottom: '10px' }}>
            <ListItemAvatar>
              <Avatar src={item.authorPic} />
            </ListItemAvatar>
            <ListItemText
              primary={item.authorName}
              secondary={item.authorHandle}
              sx={{
                '& .MuiListItemText-primary': { fontWeight: 'bold' },
                '& .MuiListItemText-secondary': { color: 'grey' }
              }}
            />
            <img
              src={item.coverImage}
              alt={item.authorName}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '8px',
                marginLeft: '10px'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export const itemData = [
  {
    authorName: 'Thomas Edward',
    authorHandle: '@thewildwithyou',
    authorPic: ArtistProfilePic1,
    coverImage: ImageGallery1
  },
  {
    authorName: 'Chris Doe',
    authorHandle: '@thewildwithyou',
    authorPic: ArtistProfilePic2,
    coverImage: ImageGallery2
  },
  {
    authorName: 'Emilie Jones',
    authorHandle: '@thewildwithyou',
    authorPic: ArtistProfilePic3,
    coverImage: ImageGallery3
  },
  {
    authorName: 'Jessica Williams',
    authorHandle: '@thewildwithyou',
    authorPic: ArtistProfilePic4,
    coverImage: ImageGallery4
  }
];
