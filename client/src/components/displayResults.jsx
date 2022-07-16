import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Table, Column } from 'sticky-react-table';

export const DisplayResults = () => {
    const [content, setContent] = useState(
        [
            {
              "name": "John Doe",
              "age": 24,
              "location": "Chicago",
              "occupation": "Research Analyst"
            },
            {
              "name": "Jane Delaney",
              "age": 22,
              "location": "London",
              "occupation": "Software Developer"
            },
            {
              "name": "Nishant Singh",
              "age": 28,
              "location": "Mumbai",
              "occupation": "Business Developer"
            }
          ]
    )

    useEffect(() => {
        const getContent = async () => { 
          const pathname  = window.location.href.split("?")[1]
          const data = {
            academicYear: pathname.split('+')[0] ,
            semester:pathname.split('+')[1]
          }
            const { data: res } = await axios.post('/getResults', data)
            setContent(res) 
        }   
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
