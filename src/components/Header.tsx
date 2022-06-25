import { Box, CardMedia, Typography } from "@mui/material";

type Props = {
  title?: string
};

export const Header = ({ title }: Props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CardMedia 
          src="https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/logo-fullcycle.png"
          alt="fullcycle logo"
          component="img"
          sx={{ width: 'auto' }}
        />
        <CardMedia
          src="https://avatars.githubusercontent.com/u/50778558?v=4"
          alt="github profile"
          className="avatar"
          component="img"
          sx={{
            height: 60,
            width: 'auto',
            borderRadius: 30
          }}
        />
      </Box>
      {<Typography
        variant="h5"
        sx={{
          padding: '16px 0'
        }}>
          {title}
        </Typography>
      }
    </Box>
  );
};


