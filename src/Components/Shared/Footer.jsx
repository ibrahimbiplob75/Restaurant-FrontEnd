import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Top Section with Company Info and Social Links */}
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="flex flex-wrap justify-between items-center">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current text-yellow-500 mr-3"
              >
                <path d="M22.672 15.226l-2.432..."></path>
              </svg>
              <h3 className="text-xl font-semibold">ACME Industries Ltd.</h3>
            </div>
            <p className="text-gray-400">
              Providing reliable tech solutions since 1992.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-700 my-8"></div>

      {/* Bottom Section with Navigation and Copyright */}
      <div className="container mx-auto px-4 md:px-12 lg:px-20 text-center md:text-left">
        <div className="md:flex justify-between items-center">
          {/* Navigation */}
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} CulinaryCloud. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
