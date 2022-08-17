import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import axios from 'axios'

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export function BottomAppBar() {
  const [courseName, setCourseName] = React.useState('')
  const [courseId, setCourseId] = React.useState('')
  const [batch, setBatch] = React.useState('')
  const [response, setResponse] = React.useState('')
  

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if ( event.type === "keydown" && (event.key === "Tab" || event.key === "Shift") ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const addCourse = async () => {
    const data = {
      courseName: courseName,
      courseId: courseId,
      batch:batch
    }  
    const { data: res } = await axios.post(process.env.REACT_APP_NODEJS_URL + '/addCourseToBackpack', data)
    setResponse(res.message)

  };

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="sticky" color="primary" sx={{ bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab
            onClick={toggleDrawer("bottom", true)}
            color="secondary"
            aria-label="add"
          >
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>

          <IconButton color="inherit">
            <React.Fragment key={"bottom"}>
              <Drawer
                anchor={"bottom"}
                open={state["bottom"]}
                onClose={toggleDrawer("bottom", false)}
              >
                <Typography variant="h6">Add Course</Typography>
                <Box sx={{ width: 'auto'}} role="presentation">
                  <List sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                    <ListItem>
                    <TextField value={courseName} onChange={(e)=>setCourseName(e.target.value)} required label="Course Name" variant="outlined" />  
                    </ListItem>
                    <ListItem >
                    <TextField value={courseId} onChange={(e)=>setCourseId(e.target.value)} required label="Course Id : 19AD451" variant="outlined" />  
                    </ListItem>
                    <ListItem >
                    <TextField value={batch} onChange={(e)=>setBatch(e.target.value)} required label="Course Batch : 2020-24" variant="outlined" />  
                    </ListItem>
                    <ListItem >
                      <Button variant="contained" color="success" onClick={addCourse}>Submit</Button>
                    </ListItem>
                    <ListItem >
                      <p>{ response }</p>
                    </ListItem>
                  </List>
                  <Divider />
                </Box>
              </Drawer>
            </React.Fragment>
          </IconButton>

          <IconButton color="inherit">
            <DeleteForeverIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
