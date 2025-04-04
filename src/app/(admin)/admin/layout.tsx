"use client";
import { useState } from 'react';
import AdminSideNavbar from '../../../components/admin/Sidebar';
 import AdminNavbar from '../../../components/admin/Navbar';
 import "./layout.css";

 export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="admin-layout-container">
    <div className="admin-top-container">
      <AdminSideNavbar isOpen={sidebarOpen} />
      <AdminNavbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
    </div>
    <main className="admin-page-content">
      {children}
    </main>
  </div>
  );
}