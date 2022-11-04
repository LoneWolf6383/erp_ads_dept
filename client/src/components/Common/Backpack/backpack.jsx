
import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios'
import FileSaver from 'file-saver';

export const Backpack = (props) => {
  const handleDownload = (e) => {
    e.preventDefault();
		axios({
      method: "GET",
			url: process.env.REACT_APP_NODEJS_URL+"/file",
			responseType: "blob",
			params: {'fileId': props.fileDetails._id}   
    }).then(res => {
      FileSaver.saveAs(res.data, props.fileDetails.filename);  
		})   
  }; 
  return (
    <div style={{ padding: '15px' }}>  
      <Card>  
        <CardActionArea onClick={handleDownload}>
          <CardContent align='right'>
            <Typography  variant="h6" component="div">
              {props.fileDetails.filename}  
            </Typography>         
          </CardContent>   
        </CardActionArea>    
      </Card>     
    </div>    
  )
}   
                           