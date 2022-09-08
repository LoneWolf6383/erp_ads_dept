import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Backpack } from "./backpack";
import axios from 'axios'
import BackpackNavbar from './backpackNavbar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function CourseVerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [courseDetails, setCourseDetails] = useState([])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  useEffect(() => {
    const getCourseList = async () => {
      const data = {flag:'Backpack'}
      const { data: res } = await axios.post(process.env.REACT_APP_NODEJS_URL + '/getAllCourseDetails', data)
      console.log(res)
      setCourseDetails(res)
    }
    getCourseList()
  }, [])
  
  return (
    <Box
      sx={{ flexGrow:1  , bgcolor: 'background.paper', display: 'flex', height: '100%', width:'100%' }}
    >
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            sx={{ borderRight: 1, borderColor: 'divider' }} 
        >
        {
          courseDetails.map(course => (
            <Tab label={course.courseName+'-'+course.courseId}/>
          ))
        }
      </Tabs>
      <div style={{width:'100%'}}>
        {
          courseDetails.map((course,index) => (
            <TabPanel value={value} index={index} sx={{ width: '100%' }}>
              <BackpackNavbar sx={{ width: '100%' }} courseDetails={ course.courseName } />
              {course.file_ids.map(file=><Backpack filename={file} />)}
            </TabPanel>
          ))
        } 
      </div>
    </Box>
  );  
}
