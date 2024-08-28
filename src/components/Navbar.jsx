import React, { useState,useEffect } from 'react';
import { BiSolidCartAlt, BiLogIn, BiCart, BiStore, BiUser } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaCompressArrowsAlt, FaExpandArrowsAlt } from "react-icons/fa";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
    }
  }, []);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  return (
    <div className="navbar bg-white shadow-lg py-2 md:py-10">
      <div className="w-full">
        {/* Mobile View */}
        <div className="md:hidden flex justify-end items-center w-full">
          <div className="flex items-center space-x-2">
            <Link to="/seller" className="btn btn-ghost btn-sm text-green-800 text-xs flex items-center gap-1 p-1">
              <BiStore className="w-4 h-4" />
              <span className="hidden sm:inline">Sell</span>
            </Link>
            <Link to="/cart" className="btn btn-ghost btn-sm text-green-800 text-xs flex items-center gap-1 p-1">
              <BiCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
            </Link>
            {isLogin ? (
              <Link to="/profile" className="btn btn-ghost btn-sm text-green-800 text-xs flex items-center gap-1 p-1">
                <BiUser className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
            ) : (
              <Link to="/login" className="btn btn-ghost btn-sm text-green-800 text-xs flex items-center gap-1 p-1">
                <BiLogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Login</span>
              </Link>
            )}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-row items-center w-full">
          {/* Logo and Fullscreen Toggle */}
          <div className="flex items-center">
            <Link to="/" className="btn btn-ghost text-green-800">
              <BiSolidCartAlt className="w-14 h-14" />
            </Link>
            {isLogin && (
              <button type="button" className="btn btn-ghost text-green-800 ml-4">
                {isFullscreen ? (
                  <FaCompressArrowsAlt onClick={closeFullscreen} className="w-7 h-7" />
                ) : (
                  <FaExpandArrowsAlt onClick={openFullscreen} className="w-7 h-7" />
                )}
              </button>
            )}
          </div>

          {/* Search Bar (only when not logged in) */}
          {!isLogin && (
            <div className="flex-1 w-full md:w-auto">
              <div className="form-control flex items-center relative">
                <input
                  type="text"
                  placeholder="Search for Product, Brand and More"
                  className="input input-bordered w-full md:w-[800px] bg-gray-100 text-lg h-12 pl-12"
                />
              </div>
            </div>
          )}
          {/* Navigation Links */}
          <div className="flex-none ml-auto flex items-center gap-6">
            {!isLogin && (
              <Link to="/login" className="btn btn-ghost text-green-800 text-2xl flex items-center gap-2">
                <BiLogIn className="w-7 h-7" /> Login
              </Link>
            )}
            <Link to="/cart" className="btn btn-ghost text-green-800 text-2xl flex items-center gap-2">
              <BiCart className="w-7 h-7" /> Cart
            </Link>
            <Link to="/seller" className="btn btn-ghost text-green-800 text-2xl flex items-center gap-2">
              <BiStore className="w-7 h-7" /> Become a Seller
            </Link>

            {/* Profile Dropdown when logged in */}
            {isLogin && (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Profile"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;