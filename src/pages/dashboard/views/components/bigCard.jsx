import React from 'react';
import { Box, CardActionArea, CardMedia, Tooltip, Zoom, Typography } from '@mui/material';
import "./bigCard.css";

const SeuComponente = (props) => {
  return (
    <Box className='card'>
      <Tooltip title={props.label} TransitionComponent={Zoom}>
        <CardActionArea
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            width: '11em',
            backgroundColor: 'rgb(42, 42, 42)',
            padding: 2,
            position: 'relative',
            overflow: 'hidden',
            marginBottom: 2,
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
              backgroundColor: 'rgba(0, 0, 0, 0.789)',
            },
            "@media (max-width: 767px)": {
              width: "7em",
            }
          }}
        >
          <CardMedia
            component="img"
            height="auto"
            image={props.image}
            alt="green iguana"
            sx={{ display: 'flex' }}
          />
          <Typography
            variant="p"
            sx={{
              '&:hover': {
                opacity: 1,
              },
              color: '#fff',
              position: 'absolute',
              width: '90%',
              height: '100%',
              top: 0,
              left: 0,
              textAlign: 'left',
              padding: 2,
              opacity: 0,
              zIndex: 1,
              transition: 'opacity .2s linear',
            }}
          >
            {props.label} <br /> <br />
            {props.label2}
          </Typography>
        </CardActionArea>
      </Tooltip>
    </Box>
  );
};

export default SeuComponente;
