"use client";
import React from 'react';
import { IoWarningOutline } from "react-icons/io5";
import Card from "../../../../components/admin/dashboardcomponent/Card";
import Graph from "../../../../components/admin/dashboardcomponent/Graph";
import RecentRequest from "../../../../components/admin/dashboardcomponent/RecentRequest";
import RecentUsers from "../../../../components/admin/dashboardcomponent/RecentUsers";
import RecentDonors from '@/components/admin/dashboardcomponent/RecentDonors';
import CopyrightFooter from "@/components/admin/dashboardcomponent/Copyright";
import DashboardNav from '@/components/admin/dashboardcomponent/DashboardNav';
import "./dashboard.css";
const DashboardPage = ({
  children
}:{children:React.ReactNode}) => {
  return (
    <div>
      <div className='dashboard-container'>
      {/* <div className='dashboard-nav'>
      {/* <div className='warning'>
      {/* <IoWarningOutline className='warning-icon' />
        <h5>Warning !</h5>

      </div> */}
      {/* <div className='curd'>
        <h5>Some CURD or Settings Are not allowed in demo </h5>
        </div>  
      </div>  */}
      <DashboardNav/>
      <Card/>
      <Graph/>

      <RecentRequest/>
      <RecentUsers/>
      <RecentDonors/>
      <CopyrightFooter/>
    
    </div>
    </div>
  
  )
}

export default DashboardPage;