"use client";
import React, { useState } from "react";

import { IoAddOutline } from "react-icons/io5";
import { RiArrowUpDownLine } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import AddDistricts from "@/components/admin/dashboardcomponent/AddDistricts";

import "../bloodbanks/bloodbanks.css";
// import DashboardNav from "@/components/admin/dashboardcomponent/DashboardNav";
const AddDistrictsPage = () => {

  const [addDistrictsOpened, setIsAddDistrictsOpened]= useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  interface districts {
    id: number;
    name: string;

    districts: string;

    province: string;
    status: "Active" | "Inactive";
  }

  const districts: districts[] = [];

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = districts.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(districts.length / entriesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEntriesPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="blood-bank-container">
      {/* <DashboardNav/> */}
      <div className="manage-blood-bank-div">
        <h1>Manage Districts</h1>
        <div className="btn-import-and-add">
        
          <button className="add" onClick={() => setIsAddDistrictsOpened(true)}>
            <IoAddOutline size={18} />
            Add Districts
          </button>
        </div>
      </div>

      <div className="table-controls">
        <div className="show-entries">
          <span>Show</span>
          <select value={entriesPerPage} onChange={handleEntriesPerPageChange}>
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
          <input type="text" placeholder="" />
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
                  <h1>Districts</h1>
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

                <td>{bank.districts}</td>

                <td>{bank.province}</td>

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
          Showing {indexOfFirstEntry + 1} to{" "}
          {Math.min(indexOfLastEntry, districts.length)} of {districts.length}{" "}
          entries
        </div>
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? "active" : ""}
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

      {addDistrictsOpened && (
        <AddDistricts onClose={() => setIsAddDistrictsOpened(false)} />
      )}
    </div>
  );
};

export default AddDistrictsPage;
