import { capitalize, Grid } from '@material-ui/core';
import { Post } from '@types';

type Props = {
  posts: Post[] | undefined
};

export const GridPosts = ({ posts }: Props) => {
  return (
    <Grid container spacing={2}>
      {posts?.map(post => (
        <Grid item xs={12} className="post">{capitalize(post.title)}</Grid>
      ))}
    </Grid>
  );
};