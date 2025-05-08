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