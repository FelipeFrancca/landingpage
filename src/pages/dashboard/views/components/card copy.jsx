import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

function ActionAreaCard(props) {
  const { sx, image } = props;
  
  return (
    <Card sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
          sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', }}
        />
        <CardContent sx={{display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            {props.label1}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.label2}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const AreaCard = (props) => {
  const { ...other } = props;
  return (
    <Box>
      {props.disabled ? (
        <ActionAreaCard disabled {...props}>{props.label}</ActionAreaCard>
      ) : (
        <ActionAreaCard backgroundImage={props.image} {...props}>{props.label1}<br />{props.label2}</ActionAreaCard>
      )}
    </Box>
  );
};

export default AreaCard;
