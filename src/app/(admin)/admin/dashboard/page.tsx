import React from 'react';
import { IoWarningOutline } from "react-icons/io5";

const DashboardPage = () => {
  return (
    <div>
      <div className='dashboard-nav'>
      <div className='warning'>
      <IoWarningOutline />
        <h3>Warning</h3>
      </div>
      <div className='curd'>
        <p>Some CURD or Settings Are not allowed in demo </p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;