import Nav from "@/components/user/navbar/Navbar";
import Footer from "../../components/user/footer/Footer";
// import 'globals.css';
export default function UserLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        <Nav />  {/* User-specific navbar */}
        <main>{children}</main>
        <Footer />  {/* User-specific footer */}
      </>
    );
  }