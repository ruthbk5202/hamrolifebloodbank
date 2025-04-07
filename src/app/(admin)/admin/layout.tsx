"use client";
import { useState } from 'react';
import AdminSideNavbar from '../../../components/admin/Sidebar';
import AdminNavbar from '../../../components/admin/Navbar';
import "./layout.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="admin-layout-container">
     
      <AdminNavbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="admin-main-container">
       
        <AdminSideNavbar isOpen={sidebarOpen} />
        
        
        <main className="admin-page-content">
          {children}
        </main>
      </div>
    </div>
  );
}