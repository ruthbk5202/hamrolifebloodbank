"use client";
import React, {  useState } from "react";

import { IoAddOutline } from "react-icons/io5";
import { RiArrowUpDownLine } from "react-icons/ri";

import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import ImportBloodBanks from "../../../../components/admin/dashboardcomponent/ImportBlood";
import AddBloodBank from "../../../../components/admin/dashboardcomponent/AddBloodBank";
import "./adminnotification.css";
import DashboardNav from "@/components/admin/dashboardcomponent/DashboardNav";
const AdminNotification = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isAddBloodBankOpened, setIsAddBloodBankOpened] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  
  interface AdminNotification {
    id: number;
    title: string;
    message:string;
    url: string;
    image: string;
   
  }

  const adminNotification: AdminNotification[] = [
    {
      id: 31,
     title: "Central Blood Bank",
   
      message: "Ghakar",
      url:"",
      image:"",

     
    },
    
  ];

  
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = adminNotification.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(adminNotification.length / entriesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEntriesPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="blood-bank-container">
      <DashboardNav/>
      <div className="manage-blood-bank-div">
        <h1>Notifications</h1>
        <div className="btn-import-and-add">
         
          <button className="add" onClick={() => setIsAddBloodBankOpened(true)}>
            <IoAddOutline size={18} />
            Send Notification
          </button>
        </div>
      </div>

      <div className="table-controls">
        <div className="show-entries">
          <span>Show</span>
          <select 
            value={entriesPerPage}
            onChange={handleEntriesPerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span>entries</span>
        </div>

        <div className="search-box">
          <label>Search: </label>
          <input 
            type="text" 
            placeholder="" 
            
          />
        </div>
      </div>

      <div className="table-scroll-container">
        <table className="blood-bank-table">
          <thead>
            <tr>
              <th>
                <div className="table-header-cell">
                  <h1>ID</h1>
                  <RiArrowUpDownLine />
                </div>
              </th>
              <th>
                <div className="table-header-cell">
                  <h1>Title</h1>
                  <RiArrowUpDownLine />
                </div>
              </th>
              <th>
                <div className="table-header-cell">
                  <h1>Message</h1>
                  <RiArrowUpDownLine />
                </div>
              </th>
              <th>
                <div className="table-header-cell">
                  <h1>URL</h1>
                  <RiArrowUpDownLine />
                </div>
              </th>
              
              
              
              
              <th>
                <div className="table-header-cell">
                  <h1>Image</h1>
                </div>
              </th>
              <th>
                <div className="table-header-cell">
                  <h1>Action</h1>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((bank) => (
              <tr key={bank.id}>
                <td>{bank.id}</td>
                <td>{bank.title}</td>
                <td>{bank.message}</td>
                <td>{bank.url}</td>
                <td>{bank.image}</td>
                
               
              
                <td>
                  <div className="action-buttons">
                
                    <button className="action-btn delete-btn" title="Delete">
                      <MdDelete size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <div className="entries-info">
          Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, adminNotification.length)} of {adminNotification.length} entries
        </div>
        <div className="pagination">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? 'active' : ''}
            >
              {page}
            </button>
          ))}
          
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

   
      {isModelOpen && (
        <ImportBloodBanks onClose={() => setIsModelOpen(false)} />
      )}
      
      {isAddBloodBankOpened && (
        <AddBloodBank onClose={() => setIsAddBloodBankOpened(false)} />
      )}
    </div>
  );
};

export default AdminNotification;