
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
    <div style={{ padding: '15px' }}>
      <Card sx={{width:'30%',height:'100%'}}>
        <CardActionArea onClick={handleClick}>
          <CardContent align='right'>
            <Typography  variant="h6" component="div">
              {props.filename}
            </Typography>
            <Typography variant="overline" noWrap={false} color="text.secondary">
              {/* {props.courseDetails.split('-')[1]} */}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
