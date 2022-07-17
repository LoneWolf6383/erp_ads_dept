import React from 'react'
import { Banner } from './banner'
import { NavBar } from './NavBar'

export const SuccessfulFeedback = () => {
  return (
    <div>
        <NavBar/>      
          <Banner />
          <p></p>
          <p>Thank you for giving your feedback! </p>  
          <p>Kindly click on our Department name Above..</p>
    </div>
  )
}
