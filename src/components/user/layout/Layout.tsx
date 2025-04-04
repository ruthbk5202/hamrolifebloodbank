// 'use client';

// import { usePathname } from 'next/navigation';
// import Nav from '../navbar/Navbar';      
// import Footer from '../footer/Footer';

// export default function LayoutHandler({ 
//   children 
// }: { 
//   children: React.ReactNode 
// }) {
//   const pathname = usePathname();
//   const isAdminRoute = pathname?.startsWith('/(admin)');

//   return (
//     <>
//       {!isAdminRoute && <Nav />}
//       <main>{children}</main>
//       {!isAdminRoute && <Footer />}
//     </>
//   );
// }