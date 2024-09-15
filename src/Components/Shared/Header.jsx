import { Link } from "react-router-dom";
import logo from "../../assets/Res_Logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../ContextProvider/ContextProvider";
import Swal from "sweetalert2";
import UseCart from "../../UseCart/UseCart";
import AxiosPublic from "../../AxiosPublic/AxiosPublic";
import { FaBars, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { user, LogOut } = useContext(AuthProvider);
  const [cart] = UseCart();
  const [axiosPublic] = AxiosPublic();
  const [User, setUser] = useState();

  useEffect(() => {
    axiosPublic
      .get(`/users?email=${user?.email}`)
      .then((res) => setUser(res.data));
  }, [user, axiosPublic]);

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
        });
      });
  };

  const menu = (
    <>
      <li className="text-lg lg:text-xl hover:text-orange-400 transition-all duration-200">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg lg:text-xl hover:text-orange-400 transition-all duration-200">
        <Link to="/menu">Our Menu</Link>
      </li>
      <li className="text-lg lg:text-xl hover:text-orange-400 transition-all duration-200">
        <Link to="/shop">Our Shop</Link>
      </li>
      <li className="text-lg lg:text-xl hover:text-orange-400 transition-all duration-200">
        <a
          href="https://ibrahimbiplob.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </li>
    </>
  );

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-36" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center">{menu}</ul>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars size={24} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-black rounded-box w-52 space-y-2"
            >
              {menu}
            </ul>
          </div>
        </div>

        {/* Right Section - Cart & Profile */}
        <div className="flex items-center space-x-4">
          {user && (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <FaShoppingCart size={20} />
                  <span className="badge badge-sm badge-error indicator-item">
                    {cart.length}
                  </span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-black rounded-box w-52"
              >
                <li>
                  <span className="text-lg font-bold">{cart.length} Items</span>
                </li>
                <li className="text-sm">Subtotal: $999</li>
                <li>
                  <Link to="/dashboard/cart">
                    <button className="btn btn-primary btn-block">
                      View Cart
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={User?.photo} alt="profile" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-black rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard/home">Profile</Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={logOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Log In</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
