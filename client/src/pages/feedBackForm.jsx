import React from 'react'
import { Banner } from '../components/Common/ForAllPages/banner'
import { NavBar } from '../components/Common/ForAllPages/navBar'
import { DynTabs } from '../components/Common/DropdownChoice/dynTabs'
export const FeedBackForm = (props) => {
  
  return (
    <>
      <NavBar />
      <Banner />
      <DynTabs/>
    </>
    )
}