import React from "react";
import Sidebar from "../ui/dashboard/Sidebar/sidebar";
import Navbar from "../ui/dashboard/Navbar/navbar";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
