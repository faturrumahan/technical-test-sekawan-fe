import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-5 flex-1 bg-gray-300">
        <Outlet />
      </div>
    </div>
  );
}
