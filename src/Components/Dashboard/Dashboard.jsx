import React, { useState } from "react";
import {
  FaBars,
  FaBookmark,
  FaCalendar,
  FaHome,
  FaReact,
  FaAccusoft,
  FaShoppingCart,
  FaTicketAlt,
  FaUtensils,
  FaWallet,
  FaBook,
  FaUsers,
  FaListAlt,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import CheckAdmin from "../../CheckAdmin/CheckAdmin";

const Dashboard = () => {
  const [isAdmin] = CheckAdmin();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen ">
      {/* Toggle button for mobile */}
      <button
        onClick={toggleSidebar}
        className="p-4 text-orange-500 lg:hidden absolute z-50"
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 min-h-screen bg-orange-500 p-5 shadow-lg transform transition-transform duration-300 ease-in-out z-40 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:inset-0`}
      >
        <h2 className="text-white text-3xl font-semibold mb-8">Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard/home"
              className="flex items-center text-white hover:bg-orange-600 px-4 py-2 rounded-lg transition-all"
            >
              <FaHome className="mr-3" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className="flex items-center text-white hover:bg-orange-600 px-4 py-2 rounded-lg transition-all"
            >
              <FaCalendar className="mr-3" /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className="flex items-center text-white hover:bg-orange-600 px-4 py-2 rounded-lg transition-all"
            >
              <FaShoppingCart className="mr-3" /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/orderHistory"
              className="flex items-center text-white hover:bg-orange-600 px-4 py-2 rounded-lg transition-all"
            >
              <FaListAlt className="mr-3" /> Order History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/review"
              className="flex items-center text-white hover:bg-orange-600 px-4 py-2 rounded-lg transition-all"
            >
              <FaReact className="mr-3" /> Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/bookmark"
              className="flex items-center text-white hover:bg-orange-600 px-4 py-2 rounded-lg transition-all"
            >
              <FaBookmark className="mr-3" /> Bookmark
            </NavLink>
          </li>

          {isAdmin && (
            <>
              <li className="mt-6 text-gray-200 text-lg">Admin Section</li>
              <li>
                <NavLink
                  to="/dashboard/addItem"
                  className="flex items-center text-white hover:bg-orange-600 px-4 py-2 rounded-lg transition-all"
                >
                  <FaUtensils className="mr-3" /> Add Item
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageitems"
                  className="flex items-center text-white hover:bg-orange-600 px-4 py-2 rounded-lg transition-all"
                >
                  <FaWallet className="mr-3" /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageBookings"
                  className="flex items-center text-white hover:bg-orange-600 px-4 py-2 rounded-lg transition-all"
                >
                  <FaBook className="mr-3" /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allusers"
                  className="flex items-center text-white hover:bg-orange-600 px-4 py-2 rounded-lg transition-all"
                >
                  <FaUsers className="mr-3" /> All Users
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <div className="border-t border-gray-600 mt-8 pt-5">
          <NavLink
            to="/"
            className="flex items-center text-white hover:bg-orange-600 px-4 py-2 rounded-lg transition-all"
          >
            <FaAccusoft className="mr-3" /> Website
          </NavLink>
          <NavLink
            to="/menu"
            className="flex items-center text-white hover:bg-orange-600 px-4 py-2 rounded-lg transition-all mt-4"
          >
            <FaTicketAlt className="mr-3" /> Menu
          </NavLink>
        </div>
      </div>

      {/* Content Area */}
      <div
        className="flex-1 p-10 transition-all lg:ml-64"
        onClick={() => setIsOpen(false)} // Close sidebar when clicking outside on mobile
      >
        <Outlet />
      </div>

      {/* Background overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;
