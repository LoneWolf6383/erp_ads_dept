import React,{useEffect,useState} from 'react'
import { BottomAppBar } from './bottomAppBar'
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import { Backpack } from "./backpack";
import Typography from "@mui/material/Typography";
import axios from 'axios'


export const BackpackWrapper = (props) => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    const getCourseDetails = async () => {
      const data = {flag:'Backpack'}
      const { data: res } = await axios.post(process.env.REACT_APP_NODEJS_URL + '/getAllCourseDetails', data)
      setCourses(res)
    }
    getCourseDetails()
  },[])

  return (
    <div>
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
          {
            courses.map((course) => (
                <Backpack courseName={course.split('-')[0]} courseId={course.split('-')[1]} />
            ))
          }
        </List>
      </Paper>
            <BottomAppBar />
        </div>
  )
}
