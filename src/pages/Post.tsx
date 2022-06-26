import { Header, HomeButton } from '@/components';
import { usePosts } from '@/hooks/usePosts';
import { capitalize, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

export const Post = () => {
  const { post } = usePosts()
  const navigate = useNavigate()

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
          position: 'relative',
          background: '#202327',
          borderRadius: 3,
          padding: 4,
          height: 400
        }}
      >
        <HomeButton
          color='primary'
          onClick={() => navigate('/')}
        />
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