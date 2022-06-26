import { Box, Link, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  title?: string
};

export const Header = ({ title }: Props) => {
  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CardMedia 
          src="https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/logo-fullcycle.png"
          alt="fullcycle logo"
          component="img"
          sx={{
            width: 'auto',
            cursor: 'pointer'
           }}
          onClick={() => navigate('/')}
        />
        <Link href="https://github.com/jeziellopes/fullcycle-posts#imers%C3%A3o-fullcycle-8---desafio-reactjs" target="_blank">
          <CardMedia
            src="https://avatars.githubusercontent.com/u/50778558?v=4"
            alt="github profile"
            className="avatar"
            component="img"
            sx={{
              height: 40,
              width: 'auto',
              borderRadius: 20,
              cursor: 'pointer'
            }}
          />
        </Link>
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


