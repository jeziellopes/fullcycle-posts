
import { Post } from '@/types';
import { CardPost } from '@/components';
import { Grid } from '@mui/material';

type Props = {
  posts: Post[] | undefined
};

export const GridPosts = ({ posts }: Props) => {
  return (
    <Grid
      container
      spacing={2}
      columns={{
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
      }}
    >
      {posts?.map((post, key) => (
        <Grid key={key} item xs={12} sm={6} md={6} lg={4} >
          <CardPost
            title={post.title}
            postId={post.id}
          />
        </Grid>
      ))}
    </Grid>
  );
};