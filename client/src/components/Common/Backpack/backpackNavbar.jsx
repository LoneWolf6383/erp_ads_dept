import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function BackpackNavbar(props) {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static" sx={{width:'100%'}}>
        <Toolbar>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            {props.courseDetails}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
