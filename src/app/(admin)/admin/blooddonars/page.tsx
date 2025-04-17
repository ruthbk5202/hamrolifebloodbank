"use client";
import React, {  useState } from "react";
import { TbFileImport } from "react-icons/tb";
import { IoAddOutline } from "react-icons/io5";
import { RiArrowUpDownLine } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import ImportBloodBanks from "../../../../components/admin/dashboardcomponent/ImportBlood";
import AddBloodBank from "../../../../components/admin/dashboardcomponent/AddBloodBank";
import "../bloodbanks/bloodbanks.css";
const BloodBanksPage = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isAddBloodBankOpened, setIsAddBloodBankOpened] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  
  interface BloodBank {
    id: number;
    name: string;
    mobile:number;
    city: string;
    province: string;
    BG: string;
    Points: number;
    views:number;
    type:"free" | "paid";
    status: "Active" | "Inactive";
    
  }

  const bloodBanks: BloodBank[] = [
    {
      id: 31,
      name: "Central Blood Bank",
      city: "Ghakar",
      mobile: 1111111111,
    
      province: "Gouvernorat de Ariana",
      BG:"AB+",
      Points: 45,

      views:145,
      type: "free",
      status: "Active",
    },
    {
      id: 32,
      name: "City Hospital Bank",
      city: "Gujar Khan",
      mobile:98677788,
      province: "Lowa",
      BG:"",
     Points:45,
     views:123,
     type:"paid",
      status: "Active",
    },
    {
      id: 33,
      name: "City Hospital Bank",
      city: "Gujar Khan",
      mobile:98677788,
      province: "Lowa",
      BG:"",
     Points:45,
     views:123,
     type:"paid",
      status: "Active",
    },
    {
      id: 34,
      name: "City Hospital Bank",
      city: "Gujar Khan",
      mobile:98677788,
      province: "Lowa",
      BG:"",
     Points:45,
     views:123,
     type:"paid",
      status: "Active",
    },
    {
      id: 35,
      name: "City Hospital Bank",
      city: "Gujar Khan",
      mobile:98677788,
      province: "Lowa",
      BG:"",
     Points:45,
     views:123,
     type:"paid",
      status: "Active",
    },
    {
      id: 36,
      name: "City Hospital Bank",
      city: "Gujar Khan",
      mobile:98677788,
      province: "Lowa",
      BG:"",
     Points:45,
     views:123,
     type:"paid",
      status: "Active",
    },
    {
      id: 37,
      name: "City Hospital Bank",
      city: "Gujar Khan",
      mobile:98677788,
      province: "Lowa",
      BG:"",
     Points:45,
     views:123,
     type:"paid",
      status: "Active",
    },
    {
      id: 38,
      name: "City Hospital Bank",
      city: "Gujar Khan",
      mobile:98677788,
      province: "Lowa",
      BG:"",
     Points:45,
     views:123,
     type:"paid",
      status: "Active",
    },
    {
      id: 39,
      name: "City Hospital Bank",
      city: "Gujar Khan",
      mobile:98677788,
      province: "Lowa",
      BG:"",
     Points:45,
     views:123,
     type:"paid",
      status: "Active",
    },
    {
      id: 40,
      name: "City Hospital Bank",
      city: "Gujar Khan",
      mobile:98677788,
      province: "Lowa",
      BG:"",
     Points:45,
     views:123,
     type:"paid",
      status: "Active",
    },
    {
      id: 41,
      name: "City Hospital Bank",
      city: "Gujar Khan",
      mobile:98677788,
      province: "Lowa",
      BG:"",
     Points:45,
     views:123,
     type:"paid",
      status: "Active",
    },

  ];

  
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = bloodBanks.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(bloodBanks.length / entriesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEntriesPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="blood-bank-container">
      <div className="manage-blood-bank-div">
        <h1>Manage Blood Donors</h1>
        <div className="btn-import-and-add">
          <button className="import" onClick={() => setIsModelOpen(true)}>
            <TbFileImport size={18} />
            Import from Excel
          </button>
          <button className="add" onClick={() => setIsAddBloodBankOpened(true)}>
            <IoAddOutline size={18} />
            Add Blood Donor
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
            placeholder="Search blood banks..." 
            
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
                  <h1>Name</h1>
                  <RiArrowUpDownLine />
                </div>
              </th>
              <th>
                <div className="table-header-cell">
                  <h1>mobile</h1>
                  <RiArrowUpDownLine />
                </div>
              </th>
              <th>
                <div className="table-header-cell">
                  <h1>City</h1>
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
                  <h1>BG</h1>
                  <RiArrowUpDownLine />
                </div>
              </th>
              <th>
                <div className="table-header-cell">
                  <h1>Points</h1>
                  <RiArrowUpDownLine />
                </div>
              </th>
              <th>
                <div className="table-header-cell">
                  <h1>Views</h1>
                  <RiArrowUpDownLine />
                </div>
              </th>
              <th>
                <div className="table-header-cell">
                  <h1>Type</h1>
                  <RiArrowUpDownLine />
                </div>
              </th>
              <th>
                <div className="table-header-cell">
                  <h1>Status</h1>
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
                <td>{bank.mobile}</td>
                <td>{bank.city}</td>
                <td>{bank.province}</td>
                <td>{bank.BG}</td>
                <td>{bank.Points}</td>
                <td>{bank.views}</td>
                <td>{bank.type}</td>
               
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
          Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, bloodBanks.length)} of {bloodBanks.length} entries
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

      {/* Modals */}
      {isModelOpen && (
        <ImportBloodBanks onClose={() => setIsModelOpen(false)} />
      )}
      
      {isAddBloodBankOpened && (
        <AddBloodBank onClose={() => setIsAddBloodBankOpened(false)} />
      )}
    </div>
  );
};

export default BloodBanksPage;