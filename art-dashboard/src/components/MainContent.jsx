import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import artImage1 from '../assets/art-image-1.jpg';
import artImage2 from '../assets/art-image-2.jpg';
import userImage1 from '../assets/user-image-1.jpg';
import userImage2 from '../assets/user-image-2.jpg';
import SearchIcon from '@mui/icons-material/Search';
import TitlebarImageList from './TitlebarImageList';

const images = [
  { src: artImage1, user: userImage1, userName: 'Lena Lorens', time: 'Just now', userComment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More...', likes: 9900, comments: 7300, shares: 8000 },
  { src: artImage2, user: userImage2, userName: 'Thomas J', time: '2 hours ago', userComment:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More', likes: 8800, comments: 6500, shares: 7000 },
];

const MainContent = () => {
  const [likes, setLikes] = useState(images.map(image => image.likes));
  const [liked, setLiked] = useState(images.map(() => false));

  const handleLike = index => {
    const newLiked = [...liked];
    const newLikes = [...likes];

    if (newLiked[index]) {
      newLikes[index]--;
    } else {
      newLikes[index]++;
    }

    newLiked[index] = !newLiked[index];

    setLikes(newLikes);
    setLiked(newLiked);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box sx={{ display: 'flex', mb: 2 }}>
            <TextField
              label="Search here..."
              variant="outlined"
              sx={{ flexGrow: 1, mr: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained">Filter</Button>
          </Box>
          <Grid container spacing={2}>
            {images.map((image, index) => (
              <Grid item xs={12} key={index}>
                <Paper sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={image.user} sx={{ mr: 2 }} />
                      <Box>
                       <Box sx={{ fontWeight: 'bold'}}>{image.userName}</Box>
                        <Typography variant="body2">{image.time}</Typography>
                        <Typography variant="body2">{image.userComment}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2">...</Typography>
                  </Box>
                  <img src={image.src} alt="Art" style={{ width: '100%', borderRadius: 8 }} onClick={() => handleLike(index)} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton onClick={() => handleLike(index)}>
                        {liked[index] ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                      </IconButton>
                      <Typography variant="body2">{likes[index]} Likes</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton>
                        <CommentIcon />
                      </IconButton>
                      <Typography variant="body2">{image.comments} Comments</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton>
                        <ShareIcon />
                      </IconButton>
                      <Typography variant="body2">{image.shares} Shares</Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={4}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TitlebarImageList/>
                </Box>
              </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
