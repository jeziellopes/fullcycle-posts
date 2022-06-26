import { Header } from '@/components';
import { usePosts } from '@/hooks/usePosts';
import { capitalize, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const Post = () => {
  const { post } = usePosts()

  return ( 
    <Container
      sx={{
        padding: 12,
        maxHeight: '100vh',
        backgroundColor: '#191c20'
      }}
    >
      <Header/>
      <Box
        sx={{
          background: '#202327',
          borderRadius: 3,
          padding: 4,
          height: 400
        }}
      >
        <Box sx={{ padding: '0 0 24px 0' }}>
          <Typography variant="h5">
            {capitalize(post.title || '')}
          </Typography>
        </Box>
        <Typography variant="subtitle1">
          {capitalize(post.body || '')}
        </Typography>
      </Box>
    </Container>
  )
};