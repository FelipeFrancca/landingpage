import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Teste from "./fTitle.png"
import "./cards.css";

export default function ActionAreaCard() {
  return (
    <Card className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          width='500px'
          height="612.55px"
          image={Teste}
          alt="green iguana"
          backgroundColor="#000"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}