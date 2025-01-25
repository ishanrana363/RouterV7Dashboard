import React from "react";
import AdminNavbar from "../components/navbar/AdminNavbar";
import { Outlet } from "react-router";

const AdminLayout = () => {
    return (
        <div className="flex min-h-screen">
            {/* Left Sidebar */}
            <div className="w-[15%] bg-gray-800 text-white">
                <AdminNavbar />
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-red-400 p-4">
                <Outlet />
            </div>

            {/* Right Sidebar */}
            <div className="w-[15%] bg-gray-800 text-white">
                {/* Replace with appropriate content for the right sidebar */}
                <div className="p-4 mt-[200px]">
                    <h2 className="text-lg font-bold">Right Sidebar</h2>
                    <p>Additional tools or information here.</p>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
