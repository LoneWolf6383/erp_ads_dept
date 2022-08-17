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
      <Card sx={{width:300,height:200}}>
        <CardActionArea onClick={handleClick}>
          <CardContent align='right'>
            <Typography  variant="h7" component="div">
              {props.courseName}
            </Typography>
            <Typography variant="overline" noWrap={false} color="text.secondary">
              {props.courseId}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
