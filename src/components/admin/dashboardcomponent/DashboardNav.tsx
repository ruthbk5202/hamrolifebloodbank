import React from 'react';
import { IoWarningOutline } from "react-icons/io5";
import "./dashboardnav.css";
const DashboardNav = () => {
  return (
    
        <div className='dashboard-container'>
              <div className='dashboard-nav'>
              <div className='warning'>
              <IoWarningOutline className='warning-icon' />
                <h5>Warning !</h5>
        
              </div>
              <div className='curd'>
                <h5>Some CURD or Settings Are not allowed in demo </h5>
                </div>
              </div>
    </div>
  )
}

export default DashboardNav