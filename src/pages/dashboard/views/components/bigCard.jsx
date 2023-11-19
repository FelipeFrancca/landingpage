import React from 'react';
import { Box, CardActionArea, CardMedia, Tooltip, Zoom, Typography } from '@mui/material';

const SeuComponente = (props) => {
  return (
    <Box className='card'>
      <Tooltip title={props.label} TransitionComponent={Zoom}>
        <CardActionArea
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            width: 'auto',
            backgroundColor: 'rgb(42, 42, 42)',
            padding: 2,
            position: 'relative',
            '&::before': {
              content: "''",
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0)',
              transition: 'background-color 0.3s ease',
              zIndex: 1,
            },
            '&:hover::before': {
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
            },
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={props.image}
            alt="green iguana"
            sx={{ display: 'flex' }}
          />
          <Typography
            variant="body1"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'black',
              visibility: 'hidden',
              zIndex: 2,
              '&:hover': {
                visibility: 'visible',
                border: 'solid red'
              },
            }}
          >
            Seu Texto Aqui
          </Typography>
        </CardActionArea>
      </Tooltip>
    </Box>
  );
};

export default SeuComponente;
