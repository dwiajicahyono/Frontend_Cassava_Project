import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="columns mt-6" style={{ minHeight: "100vh" }}>
        <div
          className="column is-2"
          style={{
            padding: 0,
            position: 'fixed',
            top: 80,
            left: 0,
            height: '100vh',
            overflowY: 'auto'
          }}>
          <Sidebar />
        </div>
        <div
          className="column has-background-light"
          style={{
            marginLeft: '16.6666%', // Sesuaikan dengan lebar sidebar. Ini berdasarkan kelas "is-2" dari Bulma yang secara default memiliki lebar sekitar 16.6666%
            width: '83.3333%' // Ini menyesuaikan lebar konten utama, mengingat sidebar sudah fixed dan tidak memakan ruang
          }}>
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
