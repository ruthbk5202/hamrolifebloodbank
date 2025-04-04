// app/(admin)/admin/page.tsx
import { redirect } from 'next/navigation';

export default function AdminPage() {
  // Redirect to default dashboard or render it directly
  redirect('/admin/dashboard');
  // OR if you want to render directly:
  // return <DashboardPage />;
}