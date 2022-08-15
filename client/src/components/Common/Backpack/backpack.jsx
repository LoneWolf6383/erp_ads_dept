import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Backpack = (props) => {
  const handleClick = () => {
    window.location.replace('http://localhost:3000/courseBackpack')
  }
  return (
    <div style={{padding:'5px'}}>
      <Card sx={{maxWidth:300,maxHeight:200}}>
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.courseName}Course Name
            </Typography>
            <Typography variant="body2" color="text.secondary">Write here
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
