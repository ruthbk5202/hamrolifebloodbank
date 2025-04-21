"use client";
import React, {  useState } from "react";

import { IoAddOutline } from "react-icons/io5";
import { RiArrowUpDownLine } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

import "../bloodbanks/bloodbanks.css";
import AddProvince from "@/components/admin/dashboardcomponent/AddProvince";
// import DashboardNav from "@/components/admin/dashboardcomponent/DashboardNav";
const ProvincePage = () => {
//   const [isModelOpen, setIsModelOpen] = useState(false);
  const [isAddProvinceOpened, setIsAddProvinceOpened] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  
  interface province {
    id: number;
    name: string;
   
   province:string;
    
    status: "Active" | "Inactive";
  }

  const province: province[] = [
   
   
  ];

  
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = province.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(province.length / entriesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEntriesPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="blood-bank-container">
      {/* <DashboardNav/> */}
      <div className="manage-blood-bank-div">
        <h1>Manage Blood Requests</h1>
        <div className="btn-import-and-add">
          {/* <button className="import" onClick={() => setIsModelOpen(true)}>
            <TbFileImport size={18} />
            Import from Excel
          </button> */}
          <button className="add" onClick={() => setIsAddProvinceOpened(true)}>
            <IoAddOutline size={18} />
            Add Province
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
                  <h1>Province</h1>
                  <RiArrowUpDownLine />
                </div>
              </th>
            
              
              
             
              <th>
                <div className="table-header-cell">
                  <h1>Actions</h1>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((bank) => (
              <tr key={bank.id}>
                <td>{bank.id}</td>
                <td>{bank.name}</td>
               
                <td>{bank.province}</td>
               
               
                <td>
                  <span className={`status-badge ${bank.status.toLowerCase()}`}>
                    {bank.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn view-btn" title="View">
                      <GrView size={14} />
                    </button>
                    <button className="action-btn edit-btn" title="Edit">
                      <TiEdit size={16} />
                    </button>
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
          Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, province.length)} of {province.length} entries
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

      
      
      {isAddProvinceOpened && (
        <AddProvince onClose={() => setIsAddProvinceOpened(false)} />
      )}
    </div>
  );
};

export default ProvincePage;