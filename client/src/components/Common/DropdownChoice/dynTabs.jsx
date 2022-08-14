/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState, useEffect ,useCallback} from 'react'
import { StarRating } from '../../Student/starRating'
import {Box, Tab, Tabs} from '@mui/material'
import { TabContext, TabPanel } from '@mui/lab'
import { PolarAreaChart } from '../../GraphPlot/polarAreaChart'
import { Button } from 'react-bootstrap'
export const DynTabs = () => {
  const [selectedTab, setSelectedTab] = useState('0')
  const [tabs, setTabs] = useState([])
  const [panels, setPanels] = useState([])
  const [tabIndex, setTabIndex] = useState(1)
  const [content, setContent] = useState([])
  
  const [reviewed, setReviewed] = useState(false)
  async function isReviewed(courseName) {
    try {
      var data = {
        'username': window.sessionStorage.getItem('username'),
        'courseName': courseName
      }
        const { data: res } = await axios.post('/isReviewed', data)
        if (res === true) {
          setReviewed(true)
        } else {
          setReviewed(false)
        }
    } catch (error) {
      console.log(error)  
      return false
    }
  }
  const generateTabs = useCallback(() => {
    var tabs_array = []
    var panels_array = []
    for (const key in content) {
      isReviewed(content[key][0])
      tabs_array.push({
        value: `${key}`,
        label: content[key][0], 
      })
      panels_array.push({
        value: `${key}`,
        child: () =>
        <div style={{ display: 'flex' }}>
            <div style={{ display:'inline-block',width:'100%'}}>
              <table style={{ flex: '1'}}>
                <tr>
                <td><h4>Feed Back Section</h4><br /></td>  
                  </tr> 
                  <tr style={{ listStyle: "none" }}>
                    {content[key][1].map((q) =>
                      <tr style={{ display: 'flex' }}>
                        <td style={{ flex: '1' }}><li>{q}</li></td>
                        <td style={{ flex: '1' }}>
                          <StarRating label={content[key][0] + "+" + q} reviewed={reviewed} /> 
                        </td>
                      </tr> 
                    )}
                </tr><br />
                <tr>
                  <p>Feedbacks are non-editable, Once Completed Please Verify all the courses.</p>
                </tr>
              </table>
            </div>
            <div style={{display:'inline-block',width:'55%'}}>
              <PolarAreaChart course={content[key][0]} />
              If the above Polar graph contains five readings, then you can move on to the next course.
            </div>
        </div>    
      })
      setTabIndex(key + 1)
    }
    setTabs(tabs_array)
    setPanels(panels_array)
  },[content, reviewed])
  
  useEffect(() => {
    generateTabs()
  }, [generateTabs])

  useEffect(() => {
    const getContent = async () => { 
      const pathname  = window.location.href.split("?")[1]
      const data = {
        academicYear: pathname.split('+')[0] ,
        semester:pathname.split('+')[1]
      }
      const { data: res } = await axios.post('/getFeedbackPattern',data)
      setContent(res)
    }
    getContent()
  }, [])

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  }
  const handleSubmit = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to submit the feedback?")===true)
      window.location.replace("http://localhost:3000/studentDashboard/feedback/success")
  }
  return (
    <>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto' }}>
      <TabContext value={selectedTab}>
        <Tabs orientation='vertical' onChange={handleChange} sx={{ borderRight: 2, borderColor: 'divider' }}>
          {tabs.map(tab => (<Tab key={tab.value} label={tab.label} value={tab.value} />))}
        </Tabs>
        {panels.map(panel => (
          <TabPanel key={panel.value} value={panel.value}>
            {panel.child()}
          </TabPanel>
        ))}
      </TabContext>
     </Box>
    <div style={{display:'flex'}}>
      <div style={{ flex:'7',textAlign:'right',margin:'5px 10px 0px 0px'}}>
        <p>Once you have completed All the courses, Click this Button to Finalize</p>
      </div>
      <div className="d-grid" style={{ width: '10%', float: 'right', margin: '0px 20px 20px 0px'}}>
        <Button variant="danger" onClick={handleSubmit} style={{}}>Submit</Button>
      </div>
    </div>
    </>
    )
}
