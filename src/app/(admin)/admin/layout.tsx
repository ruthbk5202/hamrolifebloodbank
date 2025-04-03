// src/app/(admin)/layout.tsx
import AdminSideNavbar from '../../../components/admin/Sidebar';
 import AdminNavbar from '../../../components/admin/Navbar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layout">
      <AdminNavbar /> 
      <div className="admin-container">
        <AdminSideNavbar isOpen={false} />
      </div>
        <main>{children}</main>
    </div>
  );
}