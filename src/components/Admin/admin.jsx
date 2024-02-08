/* eslint-disable no-unused-vars */
import { FaHome, FaRegListAlt, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { FaMessage } from 'react-icons/fa6';

export const Admin = () => {
    return (
        <div style={{ minHeight: "100vh" }}>
            <div className="relative">
                <div className="container flex h-screen bg-slate-700 rounded-lg">
            {/* Sidebar */}
            <div className="w-64 bg-gradient-to-b from-gray-500 to-gray-900 rounded-lg p-4 shadow-md h-full">
                <div className="text-white font-semibold text-2xl mb-4">Admin Panel</div>
                <ul className="flex flex-col font-medium space-y-4">
                    <li>
                        <NavLink to={"/admin/users"} className="flex items-center space-x-2 py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                            <FaUser className="text-xl" /> <span>Users</span>
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to={"/admin/contacts"} className="flex items-center space-x-2 py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                            <FaMessage className="text-xl" /> <span>Contacts</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin/blogs"} className="flex items-center space-x-2 py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                            <FaRegListAlt className="text-xl" /> <span>Blogs</span>
                        </NavLink>
                    </li>
                     */}
                     <li>
                        <NavLink to={"/"} className="flex items-center space-x-2 py-2 px-4 rounded=--lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                            <FaHome className="text-xl" /> <span>Home</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 bg-gray-700 bg-opacity-75 rounded-lg p-4 h-full">
                <Outlet />
            </div>
        </div>
        </div>
        </div>
    );
};
