import * as React from 'react';
import { useNavigate } from "react-router-dom";
import MuiCard from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { capitalize } from '@mui/material';
import { Tags } from '@/components';
import { tags } from '@/config';


type Props = {
  title: string
  postId: string 
};

export const CardPost = ({ title, postId }: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/post/${postId}`)
  }

  return (
    <MuiCard
      onClick={handleClick}
      sx={[{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        background: '#202327',
        minHeight: 100,
        borderRadius: 2,
        '&:hover': {
          transform: 'scale(1.03)'
        }
      }, (theme) => ({
        transition: theme.transitions.create([
          'transform'], {
          duration: theme.transitions.duration.shorter
        })
      })
    ]}>
      <CardContent>
        <Box sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            image="https://events-fullcycle.s3.amazonaws.com/events-fullcycle/media/images/1397c521e2874a5b866c4ee68b0ae6c7.png"
            alt="Paella dish"
            sx={{
              borderRadius: 2,
              height: 100,
              width: 100,
              maxHeight: 100,
              maxWidth: 100,
              margin: '0 16px 0 0'
            }}
          />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <Typography gutterBottom >
              {capitalize(title)}
            </Typography>
            <Tags tags={tags('front')}/>
          </Box>
        </Box>
      </CardContent>
    </MuiCard>
  );
}