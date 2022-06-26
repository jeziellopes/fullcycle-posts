import { GridPosts, Header } from "@/components"
import { usePosts } from "@/hooks/usePosts"
import { Box, Container, Pagination } from '@mui/material'

type Props = {

};

export const Home = (props: Props) => {
  const {
    page,
    count,
    changePage,
    slicedPosts: posts
  } = usePosts()

  return (
    <Container
      sx={{
        padding: 12,
        maxHeight: '100vh',
        backgroundColor: '#191c20'
      }}
    >
      <Header title="Blog Posts"/>
      <Box minHeight={500}>
        <GridPosts posts={posts} />
      </Box>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: 400,
          padding: 4
        }}
      >
        <Pagination
          count={count}
          shape="rounded"
          color="primary"
          page={page}
          onChange={changePage}
        />
      </Container>
    </Container>
  );
};