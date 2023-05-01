import React from 'react'
import { BottomAppBar } from './bottomAppBar'
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import CourseVerticalTabs from './courseVerticalTabs';


export const BackpackWrapper = (props) => {
 
  return (
    <div style={{height:'100%'}}>
      <Paper square sx={{ pb: "50px" }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ p: 2, pb: 0 }}
        >
          Backpack
        </Typography>
        <List
          sx={{
            mb: 2,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <CourseVerticalTabs/>
        </List>
      </Paper>
            <BottomAppBar />
  </div>
  )
}
