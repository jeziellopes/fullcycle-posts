import { Box, Container, CardMedia, Typography } from '@mui/material';

export const Blank = () => {
  return (
    <Container maxWidth="sm" sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: 3
      }}>
        <CardMedia
          src="https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/404.png"
          alt="Not found error"
          component="img"
          sx={{
            height: '128px',
            width: 'auto'
          }}
        />
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: 0
      }}>
        <Typography variant="h6">
          Oops! Não foi possível encontrar a página.
        </Typography>
      </Box>
    </Container>
  );
};