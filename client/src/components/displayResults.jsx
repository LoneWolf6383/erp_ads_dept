import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {NavBar} from './NavBar'
import { Banner } from './banner'
import  MuiReactTable from './muiReactTable'

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
            const review = {}
            res.forEach(user => {
              Object.entries(user.review).map(course => {
                  if (review[course[0]])
                    review[course[0]].push(course[1])
                  else
                    review[course[0]] = [course[1]]
              })
            });
          setContent(review)
          console.log(content)
          }   
        getContent()
    })
    
  return (
    <div>
      <NavBar />
      <Banner/>
      {
        Object.entries(content).map(course => (
          <MuiReactTable data={course}/>
        ))
      }
    </div>
  )
}
