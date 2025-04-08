"use client";
import React from 'react';
import './recentrequest.css'; // We'll create this CSS file next

interface Request {
  id: number;
  requesterName: string;
  city: string;
  bloodGroup: string;
  bags: number;
  fulfilled: boolean;
  requestedAt: string;
}

const RequestsTable: React.FC = () => {
  const requests: Request[] = [
    {
      id: 151,
      requesterName: 'Devendra Kumar Chaudhary',
      city: 'Haldiwani',
      bloodGroup: 'A+',
      bags: 2,
      fulfilled: false,
      requestedAt: '03/03/2025 09:27:01 am'
    },
    {
      id: 150,
      requesterName: 'BENJAMIN OFORI ATTA',
      city: 'Tarkwa',
      bloodGroup: 'A-',
      bags: 25,
      fulfilled: false,
      requestedAt: '22/02/2025 07:55:22 pm'
    },
    {
      id: 148,
      requesterName: 'test hhhh',
      city: 'Boromo',
      bloodGroup: 'AB+',
      bags: 1,
      fulfilled: false,
      requestedAt: '02/09/2024 04:52:17 pm'
    },
    {
      id: 147,
      requesterName: 'xgc ggf',
      city: '',
      bloodGroup: 'B-',
      bags: 3,
      fulfilled: false,
      requestedAt: '15/08/2024 09:53:15 am'
    },
    {
      id: 146,
      requesterName: 'xgc ggf',
      city: '',
      bloodGroup: 'B-',
      bags: 3,
      fulfilled: false,
      requestedAt: '15/08/2024 09:52:58 am'
    },
    {
      id: 144,
      requesterName: 'Anil Mandal',
      city: 'Janakpur',
      bloodGroup: 'B-',
      bags: 1,
      fulfilled: false,
      requestedAt: '18/05/2024 12:17:45 pm'
    },
    {
      id: 143,
      requesterName: 'fsaofasf',
      city: 'Dhaka',
      bloodGroup: 'AB+',
      bags: 3,
      fulfilled: false,
      requestedAt: '10/05/2024 05:47:20 pm'
    },
    {
      id: 142,
      requesterName: 'Rashed',
      city: 'Garango',
      bloodGroup: 'A+',
      bags: 2,
      fulfilled: false,
      requestedAt: '20/03/2024 04:15:02 pm'
    },
    {
      id: 141,
      requesterName: 'Alok Thakur',
      city: 'Biratnagar',
      bloodGroup: 'O+',
      bags: 1,
      fulfilled: false,
      requestedAt: '06/01/2024 06:43:24 pm'
    },
    {
      id: 140,
      requesterName: 'Aalu Pandey',
      city: 'Baglung',
      bloodGroup: 'O-',
      bags: 5,
      fulfilled: false,
      requestedAt: '19/11/2023 09:22:21 am'
    }
  ];

  return (
    <div className="requests-container">
      <h2>Recent Requests</h2>
      <div className="table-container">
        <table className="requests-table">
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Requester Name</th>
              <th>City</th>
              <th>Blood Group</th>
              <th>Bags</th>
              <th>Fulfilled</th>
              <th>Requested at</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.requesterName}</td>
                <td>{request.city || '-'}</td>
                <td>{request.bloodGroup}</td>
                <td>{request.bags}</td>
                <td>
                  <input 
                    type="checkbox" 
                    checked={request.fulfilled} 
                    onChange={() => {}} 
                    className="fulfilled-checkbox"
                  />
                </td>
                <td>{request.requestedAt}</td>
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

export default RequestsTable;