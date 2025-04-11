import React from "react";
import { TbFileImport } from "react-icons/tb";
import { IoAddOutline } from "react-icons/io5";
import { RiArrowUpDownLine } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import "./bloodbanks.css";

const BloodBanksPage = () => {
  interface BloodBank {
    id: number;
    name: string;
    city: string;
    state: string;
    country: string;
    contact: string;
    latLon: string;
    status: string;
  }

  const bloodBanks: BloodBank[] = [
    {
      id: 31,
      name: "10",
      city: "Ghakar",
      state: "Gouvernorat de Ariana",
      country: "Poland",
      contact: "1111111111",
      latLon: "33.3333, 73.2233",
      status: "Active",
    },
    {
      id: 34,
      name: "13",
      city: "Gujar Khan",
      state: "Lowa",
      country: "Qatar",
      contact: "4444444444",
      latLon: "33.3333, 73.2233",
      status: "Active",
    },

    {
      id: 42,
      name: "kjk",
      city: "Ambon",
      state: "Maluku",
      country: "Indonesia",
      contact: "hjh",
      latLon: "-3.638666, 128.168856",
      status: "Active",
    },

    {
      id: 42,
      name: "kjk",
      city: "Ambon",
      state: "Maluku",
      country: "Indonesia",
      contact: "hjh",
      latLon: "-3.638666, 128.168856",
      status: "Active",
    },

    {
      id: 42,
      name: "kjk",
      city: "Ambon",
      state: "Maluku",
      country: "Indonesia",
      contact: "hjh",
      latLon: "-3.638666, 128.168856",
      status: "Active",
    },

    {
      id: 42,
      name: "kjk",
      city: "Ambon",
      state: "Maluku",
      country: "Indonesia",
      contact: "hjh",
      latLon: "-3.638666, 128.168856",
      status: "Active",
    },

    {
      id: 42,
      name: "kjk",
      city: "Ambon",
      state: "Maluku",
      country: "Indonesia",
      contact: "hjh",
      latLon: "-3.638666, 128.168856",
      status: "Active",
    },

    {
      id: 42,
      name: "kjk",
      city: "Ambon",
      state: "Maluku",
      country: "Indonesia",
      contact: "hjh",
      latLon: "-3.638666, 128.168856",
      status: "Active",
    },

    {
      id: 42,
      name: "kjk",
      city: "Ambon",
      state: "Maluku",
      country: "Indonesia",
      contact: "hjh",
      latLon: "-3.638666, 128.168856",
      status: "Active",
    },

    {
      id: 42,
      name: "kjk",
      city: "Ambon",
      state: "Maluku",
      country: "Indonesia",
      contact: "hjh",
      latLon: "-3.638666, 128.168856",
      status: "Active",
    },
  ];
  return (
    <div className="blood-bank-container">
      <div className="manage-blood-bank-div">
        <h1>Manage Blood Banks</h1>
        <div className="btn-import-and-add">
          <button className="import">
            {" "}
            <span>
              <TbFileImport />
            </span>
            Import from Excel
          </button>
          <button className="add">
            {" "}
            <span>
              <IoAddOutline />
            </span>{" "}
            Add blood banks
          </button>
        </div>
      </div>

      <div className="table-controls">
        <div className="show-entries">
          <span>Show</span>
          <select>
            <option>5</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span>entries</span>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Type & hit enter to search the table"
          />
        </div>
      </div>

      <table className="blood-bank-table">
        <thead>
          <tr>
            <th>ID <RiArrowUpDownLine /></th>
            <th>Name <RiArrowUpDownLine /></th>
            <th>City <RiArrowUpDownLine /></th>
            <th>State <RiArrowUpDownLine /></th>
            <th>Country <RiArrowUpDownLine /></th>
            <th>Contact <RiArrowUpDownLine /></th>
            <th>Lat/Lon <RiArrowUpDownLine /></th>
            <th>Status <RiArrowUpDownLine /></th>
            <th>Action <RiArrowUpDownLine /></th>
          </tr>
        </thead>
        <tbody>
          {bloodBanks.map((bank) => (
            <tr key={bank.id}>
              <td>{bank.id}</td>
              <td>{bank.name}</td>
              <td>{bank.city}</td>
              <td>{bank.state}</td>
              <td>{bank.country}</td>
              <td>{bank.contact}</td>
              <td>{bank.latLon}</td>
              <td>{bank.status}</td>
              <td className="action-icons">
                <button>
                <span >
                <GrView />
                </span>
                </button>
              <button>
                <span>
                <TiEdit />
                </span>
                </button>
                <button>
                <span >
                <MdDelete />
                </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-footer">
        <div className="entries-info">Showing 1 to 10 of 15 entries</div>

        <div className="pagination">
          <button>Previous</button>
          <button>1</button>
          <button className="active">2</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default BloodBanksPage;
