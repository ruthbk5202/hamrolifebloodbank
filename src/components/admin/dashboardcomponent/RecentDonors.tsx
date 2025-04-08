"use client";
import React from 'react';
import './recentdonors.css'; // We'll create this CSS file next

interface Donors {
  id: number;
  name: string;
  city: string;
  bloodGroup: string;

  type: boolean;
  registeredAt: string;
}

const RecentDonors: React.FC = () => {
  const users: Donors[] = [
    {
      id: 1511,
      name: 'Devendra Kumar Chaudhary',
      city: 'Haldiwani',
      bloodGroup: 'A+',
     
      type: false,
      registeredAt: '03/03/2025 09:27:01 am'
    },
    {
      id: 150,
      name: 'BENJAMIN OFORI ATTA',
      city: 'Tarkwa',
      bloodGroup: 'A-',
     
      type: false,
      registeredAt: '22/02/2025 07:55:22 pm'
    },
    {
      id: 148,
      name: 'test hhhh',
      city: 'Boromo',
      bloodGroup: 'AB+',
    
      type: false,
      registeredAt: '02/09/2024 04:52:17 pm'
    },
    {
      id: 147,
      name: 'xgc ggf',
      city: '',
      bloodGroup: 'B-',
     
      type: false,
      registeredAt: '15/08/2024 09:53:15 am'
    },
    {
      id: 146,
      name: 'xgc ggf',
      city: '',
      bloodGroup: 'B-',
    
      type: false,
      registeredAt: '15/08/2024 09:52:58 am'
    },
    {
      id: 144,
      name: 'Anil Mandal',
      city: 'Janakpur',
      bloodGroup: 'B-',
     
      type: false,
      registeredAt: '18/05/2024 12:17:45 pm'
    },
    {
      id: 143,
      name: 'fsaofasf',
      city: 'Dhaka',
      bloodGroup: 'AB+',
     
      type: false,
      registeredAt: '10/05/2024 05:47:20 pm'
    },
    {
      id: 142,
      name: 'Rashed',
      city: 'Garango',
      bloodGroup: 'A+',
     
      type: false,
      registeredAt: '20/03/2024 04:15:02 pm'
    },
    {
      id: 141,
      name: 'Alok Thakur',
      city: 'Biratnagar',
      bloodGroup: 'O+',
     
      type: false,
      registeredAt: '06/01/2024 06:43:24 pm'
    },
    {
      id: 140,
      name: 'Aalu Pandey',
      city: 'Baglung',
      bloodGroup: 'O-',
      
      type: false,
      registeredAt: '19/11/2023 09:22:21 am'
    }
  ];

  return (
    <div className="requests-container">
      <h2>Recent Donors</h2>
      <div className="table-container">
        <table className="requests-table">
          <thead>
            <tr>
              <th>Donor ID</th>
              <th>Name</th>
              <th>City</th>
              <th>Blood Group</th>
             
             <th>type</th>
              <th>Registered at</th>
            </tr>
          </thead>
          <tbody>
            {users.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.name}</td>
                <td>{request.city || '-'}</td>
                <td>{request.bloodGroup}</td>
                
                <td>
                  <input 
                    type="button" 
                    checked={request.type} 
                    onChange={() => {}} 
                    className="fulfilled-checkbox"
                  />
                </td>
                <td>{request.registeredAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='view-button'>
      <button className="view-all-button">View All Requests</button>
      </div>
    </div>
  );
};

export default RecentDonors;