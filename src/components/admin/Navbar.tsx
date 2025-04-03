"use client";
import { FiBell } from 'react-icons/fi';
import { IoReorderThreeOutline } from "react-icons/io5";
import Link from "next/link";
import './AdminNavbar.css'; // Regular CSS import

export default function AdminNavbar() {
  return (
    <header className="admin-navbar">
      <div className="navbar-left">
        <button className="icon-button">
          <IoReorderThreeOutline size={20} />
        </button>
      </div>
      
      <div className="navbar-center">
        <Link className="nav-link" href="/admin/home">Home</Link>
        <Link className="nav-link" href="/admin/settings">Settings</Link>
        <button className="nav-button">Download Demo APK</button>
        <button className="nav-button">Read Documentation</button>
      </div>
      
      <div className="navbar-right">
        <button className="notification-button">
          <FiBell size={20} />
          <span className="notification-badge">3</span>
        </button>
      </div>
    </header>
  );
}