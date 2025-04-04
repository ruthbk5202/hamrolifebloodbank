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
  group?: string;
}

export default function AdminSideNavbar({ isOpen }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems: MenuItem[] = [
    { id: "dashboard", title: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { id: "blood-banks", title: "Blood Banks", icon: <Droplets size={18} /> },
    { id: "blood-donors", title: "Blood Donors", icon: <Users size={18} /> },
    { id: "blood-requests", title: "Blood Requests", icon: <ClipboardList size={18} /> },
    { id: "app-users", title: "App Users", icon: <UserCircle size={18} /> },
    // { id: "countries", title: "", icon: <Globe size={18} /> },
    { id: "province", title: "province", icon: <MapPin size={18} /> },
    { id: "cities", title: "Cities", icon: <Building2 size={18} /> },
    { id: "blogs", title: "Blogs", icon: <FileText size={18} /> },
    { id: "notifications", title: "Notifications", icon: <Bell size={18} /> },
    { id: "settings", title: "Settings", icon: <Settings size={18} /> },
    { id: "logout", title: "Logout", icon: <LogOut size={18} />, group: "MISCELLANEOUS" },
  ];

  const mainItems = menuItems.filter(item => !item.group);
  const miscItems = menuItems.filter(item => item.group);

  return (
    <aside className={`admin-sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h2 className="app-name">Blood Bank App</h2>
        <div className="user-info">
          <span className="user-role">admin</span>
        </div>
      </div>

      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <ul>
            {mainItems.map((item) => (
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
            {miscItems.map((item) => (
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
        </div>
      </div>
    </aside>
  );
}