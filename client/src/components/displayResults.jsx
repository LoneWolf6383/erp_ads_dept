import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Table, Column } from 'sticky-react-table';

export const DisplayResults = () => {
    const [content, setContent] = useState([])

    useEffect(() => {
        const getContent = async () => { 
          const pathname  = window.location.href.split("?")[1]
          const data = {
            academicYear: pathname.split('+')[0],
            semester:pathname.split('+')[1]
          }
            const { data: res } = await axios.post('/getResults', data)
            setContent(res) 
        }   
        const review = {}
        content.forEach(user => {
          Object.entries(user.review).map(course => {
            Object.entries(course[1]).map(co => {
              if (review[co[0]])
                review[co[0]].push(co[1])
              else
                review[co[0]] = [co[1]]
            })
          })
        });
        console.log(review)
        getContent()
      }, [content])
    
  return (
    <div>
        <Table data={content}>
            <Column title="Name" width={200} dataKey="username" />
            <Column title="Occupation" width={200} dataKey="" />
            <Column title="Location" width={150} dataKey="location" />
            <Column title="Top Skill" width={150} dataKey="topSkill" />
        </Table>
    </div>
  )
}
