import { Link } from "react-router-dom";
import logo from "../../assets/Res_Logo.png";
import { useContext, useEffect } from "react";
import { AuthProvider } from "../../ContextProvider/ContextProvider";
import Swal from "sweetalert2";
import UseCart from "../../UseCart/UseCart";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../AxiosSecure/UseAxiosSecure";
import AxiosPublic from "../../AxiosPublic/AxiosPublic";


const Header = () => {
  const {user,LogOut}=useContext(AuthProvider);
  const [cart]=UseCart();
  const [axiosPublic] = AxiosPublic();

  
  const response = axiosPublic.get(`/users?email=${user?.email}`);


    const logOut = () => {
      LogOut()
        .then(() => {
          Swal.fire({
            title: "Success!",
            text: "You Have Logged Out",
            icon: "success",
            confirmButtonText: "Ok",
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        });
    };
    const menu = (
      <>
        <Link to="/">
          <li className="text-2xl m-2">Home</li>
        </Link>
        <Link to="/menu">
          <li className="text-2xl m-2">Our Menu</li>
        </Link>
        <Link to="/shop">
          <li className="text-2xl m-2">Our Shop</li>
        </Link>
        <a href="https://ibrahimbiplob.me/" target="_blank">
          <li className="text-2xl m-2">Contact Us</li>
        </a>
      </>
    );

    const menu2 = (
      <>
        <Link to="/">
          <li className="text-xl m-2">Home</li>
        </Link>
        <Link to="/menu">
          <li className="text-xl m-2">Our Menu</li>
        </Link>
        <Link to="/shop">
          <li className="text-xl m-2">Our Shop</li>
        </Link>
        <Link to="/">
          <li className="text-xl m-2">Contact Us</li>
        </Link>
      </>
    );
    return (
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu  bg-opacity-80 bg-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
              {menu2}
            </ul>
          </div>
          <div className="w-1/2">
            <img className="w-1/2 text-white" src={logo}></img>
          </div>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>

        <div className="flex">
          {user ? (
            <div className="dropdown dropdown-end mr-6">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cart.length}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] bg-opacity-80 bg-black card card-compact dropdown-content w-52 shadow"
              >
                <div className="card-body ">
                  <span className="font-bold text-lg">{cart.length} Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <Link to="/dashboard/home" className="w-full">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            " "
          )}
          {user ? (
            <div className="dropdown dropdown-end mr-4">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul className="menu menu-sm bg-opacity-80 bg-black dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Link onClick={logOut}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Log-In
              </button>
            </Link>
          )}
        </div>
      </div>
    );
};

export default Header;