import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';
import React from 'react';

const PostCard = (props) => {
  const { post } = props;
  return (
    <Card
      sx={{ height: 450, width: 300, display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="img"
        height="200"
        image={post.images[0]}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          title={post.title}
          gutterBottom
          variant="h5"
          component="div"
          noWrap
        >
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
        <Rating name="simple-controlled" value={post.rating} />
      </CardContent>

      <div style={{ flexGrow: 1 }} />

      <CardActions>
        <Button>Купить</Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;