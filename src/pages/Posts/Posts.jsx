import React, { useEffect, useState } from 'react';

import API from '../../requester';
import { Grid } from '@mui/material';
import PostCard from '../../components/PostCard/PostCard';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await API.get('/products');
    setPosts(response.data.products);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Grid
      container
      wrap="wrap"
      justifyContent="space-around"
      alignContent="stretch"
      alignItems="stretch"
    >
      {posts.map((post) => (
        <Grid key={post.id} item>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;