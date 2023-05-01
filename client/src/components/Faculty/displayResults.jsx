import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {NavBar} from '../Common/ForAllPages/navBar'
import { Banner } from '../Common/ForAllPages/banner'
import  MuiReactTable from './muiReactTable'
export const DisplayResults = () => {
    const [content, setContent] = useState([])
    const [len, setLen] = useState(0)
    useEffect(() => {
        const getContent = async () => { 
          const pathname  = window.location.href.split("?")[1]
          const data = {
            academicYear: pathname.split('+')[0],
            semester:pathname.split('+')[1]
          }
            const { data: res } = await axios.post(process.env.REACT_APP_NODEJS_URL+'/getResults', data)
            const review = {}
            setLen(res.length)  
            res.forEach(user => {
              Object.entries(user.review).map(course => {
                  if (review[course[0]])
                    return review[course[0]].push(course[1])
                  else
                    return review[course[0]] = [course[1]]
              })
            });
          setContent(review)
          }   
        getContent()
    })
    
  return (
    <div>
      <NavBar />
      <Banner/>
      {
        Object.entries(content).map(course => (
          <MuiReactTable data={course} len={len} />
        ))
      }
    </div>
  )
}
