import React from "react";
import AdminNavbar from "../components/navbar/AdminNavbar";
import { Outlet } from "react-router";

const AdminLayout = () => {
    return (
        <div className="flex min-h-screen">
            {/* Admin Navbar */}
            <div className="w-[300px] bg-gray-800 text-white">
                <AdminNavbar />
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-red-400 p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
