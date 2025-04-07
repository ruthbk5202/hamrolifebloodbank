import React from 'react';
import { IoWarningOutline } from "react-icons/io5";
import Card from "../../../../components/admin/dashboardcomponent/Card";
import Graph from "../../../../components/admin/dashboardcomponent/Graph"
import "./dashboard.css";
const DashboardPage = () => {
  return (
    <div>
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
      <Card/>
      <Graph/>
    </div>
    </div>
  )
}

export default DashboardPage;