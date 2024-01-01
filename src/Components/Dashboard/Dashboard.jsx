import React from 'react';
import { FaBookmark, FaCalendar, FaHome, FaReact,FaAccusoft, FaShoppingCart, FaTicketAlt, FaUtensils, FaWallet, FaBook, FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const isAdmin=true;
    return (
      <div className="flex">
        {/* sidebar */}
        <div className="w-64 min-h-screen bg-orange-400 m-2 rounded-xl shadow-2xl">
          <ul className="menu">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminhome">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItem">
                    {" "}
                    <FaUtensils></FaUtensils> Add an Item
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageitems">
                    <FaWallet></FaWallet> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaBook></FaBook> Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="mt-4">
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome>Home
                  </NavLink>
                </li>

                <li className="mt-4 text-white bg-green-800 rounded-xl">
                  <NavLink to="/dashboard/reservation">
                    <FaCalendar></FaCalendar>Reservation
                  </NavLink>
                </li>

                <li className="mt-4 text-white bg-green-800 rounded-xl">
                  <NavLink to="/dashboard/cart">
                    <FaShoppingCart></FaShoppingCart>My Cart
                  </NavLink>
                </li>
                <li className="mt-4 text-white bg-green-800 rounded-xl">
                  <NavLink to="/dashboard/reservation">
                    <FaReact></FaReact>Review
                  </NavLink>
                </li>
                <li className="mt-4 text-white bg-green-800 rounded-xl">
                  <NavLink to="/dashboard/reservation">
                    <FaBookmark></FaBookmark>Bookmark
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider "></div>

            <li className="mt-4 text-white bg-green-800 rounded-xl">
              <NavLink to="/">
                <FaAccusoft></FaAccusoft>Website
              </NavLink>
            </li>

            <li className="mt-4 text-white bg-green-800 rounded-xl">
              <NavLink to="/menu">
                <FaTicketAlt></FaTicketAlt>Menu
              </NavLink>
            </li>
          </ul>
        </div>
        {/* constent area */}
        <div className="flex-1 m-20">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;