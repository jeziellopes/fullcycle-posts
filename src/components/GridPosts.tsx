
import { Post } from '@/types';
import { Card } from '@/components';
import { Grid } from '@mui/material';

type Props = {
  posts: Post[] | undefined
};

export const GridPosts = ({ posts }: Props) => {
  return (
    <Grid container spacing={2}>
      {posts?.map((post, key) => (
        <Grid key={key}item xs={6}>
          <Card title={post.title}/>
        </Grid>
      ))}
    </Grid>
  );
};