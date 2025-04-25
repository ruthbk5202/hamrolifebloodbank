
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hamro Life Blood',
  description: 'Blood donation platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>{children}</body>
   
    </html>
  );
}
