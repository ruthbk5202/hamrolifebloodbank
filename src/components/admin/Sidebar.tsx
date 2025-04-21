"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaMapMarkedAlt } from "react-icons/fa";
import Link from "next/link";
import {
  LayoutDashboard,
  Droplets,
  Users,
  ClipboardList,
  UserCircle,
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
  path: string;
  group?: string;
}

export default function AdminSideNavbar({ isOpen }: SidebarProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path || pathname.startsWith(`/admin/${path}`);

  const menuItems: MenuItem[] = [
    { id: "dashboard", title: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/dashboard" },
    { id: "blood-banks", title: "Blood Banks", icon: <Droplets size={18} />, path: "/bloodbanks" },
    { id: "blood-donors", title: "Blood Donors", icon: <Users size={18} />, path: "/blooddonars" },
    { id: "blood-requests", title: "Blood Requests", icon: <ClipboardList size={18}/>, path: "/bloodrequest" },
    { id: "app-users", title: "App Users", icon: <UserCircle size={18} />, path: "/appusers" },
    { id: "province", title: "Province", icon: <MapPin size={18} />, path: "/province" },
    { id: "districts", title: "Districts", icon: <FaMapMarkedAlt   size={18} />, path: "/districts" },
    
    { id: "cities", title: "Cities", icon: <Building2 size={18} />, path: "/cities" },
    { id: "blogs", title: "Blogs", icon: <FileText size={18} />, path: "/blogs" },
    { id: "notifications", title: "Notifications", icon: <Bell size={18} />, path: "/notification" },
    { id: "settings", title: "Settings", icon: <Settings size={18} />, path: "/settings" },
    { id: "logout", title: "Logout", icon: <LogOut size={18} />, group: "MISCELLANEOUS", path: "/logout" },
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
                className={`nav-item ${isActive(item.path) ? "active" : ""}`}
              >
                <Link href={`/admin${item.path}`}>
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.title}</span>
                </Link>
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
                className={`nav-item ${isActive(item.path) ? "active" : ""}`}
              >
                <Link href={`/admin/${item.path}`}>
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}