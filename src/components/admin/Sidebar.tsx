"use client";
import { useState } from "react";
import {
  LayoutDashboard,
  Droplets,
  Users,
  ClipboardList,
  UserCircle,
  Globe,
  MapPin,
  Building2,
  FileText,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import "./adminsidebar.css"

interface SidebarProps {
  isOpen: boolean;
}

interface MenuItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export default function AdminSideNavbar({ isOpen }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems: MenuItem[] = [
    { id: "dashboard", title: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { id: "blood-banks", title: "Blood Banks", icon: <Droplets size={18} /> },
    { id: "blood-donors", title: "Blood Donors", icon: <Users size={18} /> },
    { id: "blood-requests", title: "Blood Requests", icon: <ClipboardList size={18} /> },
    { id: "app-users", title: "App Users", icon: <UserCircle size={18} /> },
    { id: "countries", title: "Countries", icon: <Globe size={18} /> },
    { id: "states", title: "States", icon: <MapPin size={18} /> },
    { id: "cities", title: "Cities", icon: <Building2 size={18} /> },
    { id: "blogs", title: "Blogs", icon: <FileText size={18} /> },
    { id: "notifications", title: "Notifications", icon: <Bell size={18} /> },
    { id: "settings", title: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside className={`admin-sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-user">
        <div className="user-avatar">
          <UserCircle size={32} />
        </div>
        <div className="user-details">
          <span className="user-role">Admin</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${activeItem === item.id ? "active" : ""}`}
              onClick={() => setActiveItem(item.id)}
            >
              <a href="#">
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="footer-title">MISCELLANEOUS</div>
        <ul>
          <li className="nav-item">
            <a href="#">
              <span className="nav-icon">
                <LogOut size={18} />
              </span>
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}