"use client";
import React, { useState } from "react";
import { TbFileImport } from "react-icons/tb";
import { IoAddOutline, IoCheckmark, IoClose } from "react-icons/io5";
import { RiArrowUpDownLine } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import ImportBloodBanks from "../../../../components/admin/dashboardcomponent/ImportBlood";
import AddBloodBank from "../../../../components/admin/dashboardcomponent/AddBloodBank";
import BloodBankEdit from "@/components/admin/Actions/BoodBankEdit";
import "./bloodbanks.css";

import Views from "@/components/admin/Actions/Views";

const BloodBanksPage = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isViewModelOpened, setViewModelOpen] = useState(false);
  const [isAddBloodBankOpened, setIsAddBloodBankOpened] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditBloodBankOpen, setEditBloodBankOpen] = useState(false);

  interface BloodBank {
    id: number;
    name: string;
    city: string;
    Province: string;

    status: "Active" | "Inactive";
  }

  const [bloodBanks, setBloodBanks] = useState<BloodBank[]>([
    {
      id: 31,
      name: "Central Blood Bank",
      city: "Ghakar",
      Province: "Gouvernorat de Ariana",
      status: "Active",
    },
    {
      id: 34,
      name: "City Hospital Bank",
      city: "Gujar Khan",
      Province: "Lowa",
      status: "Active",
    },
    {
      id: 42,
      name: "kjk",
      city: "Ambon",
      Province: "Maluku",
      status: "Active",
    },
    {
      id: 43,
      name: "kjk",
      city: "Ambon",
      Province: "Maluku",
      status: "Active",
    },
    {
      id: 44,
      name: "kjk",
      city: "Ambon",
      Province: "Maluku",

      status: "Active",
    },
    {
      id: 45,
      name: "kjk",
      city: "Ambon",
      Province: "Maluku",
      status: "Active",
    },
    {
      id: 46,
      name: "kjk",
      city: "Ambon",
      Province: "Maluku",
      status: "Active",
    },
    {
      id: 47,
      name: "kjk",
      city: "Ambon",
      Province: "Maluku",
      status: "Active",
    },
    {
      id: 48,
      name: "kjk",
      city: "Ambon",
      Province: "Maluku",

      status: "Active",
    },
    {
      id: 49,
      name: "kjk",
      city: "Ambon",
      Province: "Maluku",
      status: "Active",
    },
  ]);

  const [newBloodBank, setNewBloodBank] = useState<
    Omit<BloodBank, "id"> & { id?: number }
  >({
    name: "",
    city: "",
    Province: "",

    status: "Active",
  });

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = bloodBanks.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(bloodBanks.length / entriesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEntriesPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleAddNew = () => {
    setIsAdding(true);
  };

  const handleCancelAdd = () => {
    setIsAdding(false);
    setNewBloodBank({
      name: "",
      city: "",
      Province: "",
      status: "Active",
    });
  };

  const handleSaveNew = () => {
    const newId = Math.max(...bloodBanks.map((b) => b.id), 0) + 1;
    const bankToAdd = {
      ...newBloodBank,
      id: newId,
    } as BloodBank;

    setBloodBanks([...bloodBanks, bankToAdd]);
    setIsAdding(false);
    setNewBloodBank({
      name: "",
      city: "",
      Province: "",
      status: "Active",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewBloodBank({
      ...newBloodBank,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="blood-bank-container">
        <div className="manage-blood-bank-div">
          <h1>Manage Blood Banks</h1>
          <div className="btn-import-and-add">
            <button className="import" onClick={() => setIsModelOpen(true)}>
              <TbFileImport size={18} />
              Import from Excel
            </button>
            <button
              className="add"
              onClick={() => setIsAddBloodBankOpened(true)}
            >
              <IoAddOutline size={18} />
              Add Blood Bank
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
            <input type="text" placeholder="Search blood banks..." />
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
                  <td>{bank.city}</td>
                  <td>{bank.Province}</td>

                  <td>
                    <span
                      className={`status-badge ${bank.status.toLowerCase()}`}
                    >
                      {bank.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="action-btn view-btn"
                        title="View"
                        onClick={() => setViewModelOpen(true)}
                      >
                        <GrView size={14} />
                      </button>
                      <button className="action-btn edit-btn" title="Edit">
                        <TiEdit
                          size={16}
                          onClick={() => setEditBloodBankOpen(true)}
                        />
                      </button>
                      <button className="action-btn delete-btn" title="Delete">
                        <MdDelete size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <input type="text" placeholder="Id" />
                </td>
                <td>
                  <input type="email" placeholder="Name" />
                </td>
                <td>
                  <input type="text" placeholder="City" />
                </td>
                <td>
                  <select>
                    <option value= "" selected disabled> Select Province</option>
                    <option value= "Province1"> Province 1</option>
                    <option value= "Province2"> Province 2</option>
                    <option value= "Province3"> Province 3</option>
                    <option value= "Province4"> Province 4</option>
                    <option value= "Province5"> Province 5</option>
                    <option value= "Province6"> Province 6</option>
                    <option value= "Province7"> Province 7</option>
                  </select>
                </td>

                <td>
                  <input type="text" placeholder="Status" />
                </td>
                <td>
                  <input type="text" placeholder="Actions" />
                </td>
              </tr>
              <tr>
                <td colSpan={8}>
                  <input
                    type="text"
                    placeholder="type and hit enter to search the table"
                    className="search-for-table"
                    style={{ width: "100%", border: "none", outline: "none" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <div className="entries-info">
            Showing {indexOfFirstEntry + 1} to{" "}
            {Math.min(indexOfLastEntry, bloodBanks.length)} of{" "}
            {bloodBanks.length} entries
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

        {isModelOpen && (
          <ImportBloodBanks onClose={() => setIsModelOpen(false)} />
        )}

        {isAddBloodBankOpened && (
          <AddBloodBank onClose={() => setIsAddBloodBankOpened(false)} />
        )}
        {isViewModelOpened && <Views onClose={() => setViewModelOpen(false)} />}
        {isEditBloodBankOpen && (
          <BloodBankEdit onCloseBtn={() => setEditBloodBankOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default BloodBanksPage;
