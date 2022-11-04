import React,{useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import axios from 'axios'
export default function BackpackNavbar(props) {
  const [filename, setFilename] = useState("");
  const [file, setFile] = useState('')
  const [batch,] = useState('2020-24')
  const [courseId, setCourseId] = useState('')
  const [isStudent, setIsStudent] = useState(false)
  useEffect(() => {
    const verifyRole = () => {
      var username = window.sessionStorage.getItem('username')
      var fileUpload = document.getElementById('fileUpload')
      if (username.includes('BAD')) {
        fileUpload.hidden=true
      }
    }
    verifyRole()
  }, [])
  
  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("filename", filename);
    formData.append("file", file);
    formData.append("courseId",courseId)
    formData.append("batch",batch)
    axios
      .post(process.env.REACT_APP_NODEJS_URL + "/file", formData)
      .then((res) => {
        alert("File uploaded successfully");
      });
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static" sx={{width:'100%'}}>
        <Toolbar>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            {props.courseDetails}
          </Typography>
          <input
              id='fileUpload'
              multiple
              type="file"
              onChange={(e) => {
                setFilename(e.target.files[0].name);
                setFile(e.target.files[0]);
                setCourseId(props.courseDetails.split('-')[1])
              } }
            />
          <Button
            color="inherit"
            onClick={(e) => handleUpload(e)}
            component="label"
          >
            <FileUploadOutlinedIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
