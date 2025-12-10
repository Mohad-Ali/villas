import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { fullName, logout,isAuthenticated  } = useAuthStore(); // ✅ auth from store
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-lg">
      <div className="max-w-8xl mx-auto px-4 md:px-12 py-10 flex items-center justify-between h-16">

        {/* ✅ LEFT — LOGO */}
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Classy Villas Logo" 
            className="w-24 h-20 rounded-full"
          />
        </div>

        {/* ✅ CENTER — MENU */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/gallery" className="hover:text-gray-300">Gallery</Link></li>
          <li><Link to="/support" className="hover:text-gray-300">Support</Link></li>

          {/* ✅ BOOKING ONLY WHEN LOGGED IN */}
          {isAuthenticated && (
            <li>
              <Link to="/booking-success" className="hover:text-gray-300">
                Booking
              </Link>
            </li>
          )}
        </ul>

        {/* ✅ RIGHT — PROFILE + LOGOUT */}
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2 bg-[#8BB6B1] text-black px-4 py-2 rounded-xl font-semibold">
                <User size={20} />
                <span>{fullName || "Profile"}</span>
              </div>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-xl font-semibold hover:opacity-80"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-[#8BB6B1] text-black px-6 py-2 rounded-xl font-semibold"
            >
              Login
            </Link>
          )}
        </div>

        {/* ✅ MOBILE MENU ICON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black text-center pb-6 space-y-4 text-lg font-medium flex flex-col items-center">

          <Link to="/" className="hover:text-gray-300 py-2">Home</Link>
          <Link to="/about" className="hover:text-gray-300 py-2">About</Link>
          <Link to="/gallery" className="hover:text-gray-300 py-2">Gallery</Link>
          <Link to="/support" className="hover:text-gray-300 py-2">Support</Link>

          {/* ✅ BOOKING ONLY WHEN LOGGED IN */}
          {isAuthenticated && (
            <Link to="/booking-success" className="hover:text-gray-300 py-2">
              Booking
            </Link>
          )}

          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2 bg-[#8BB6B1] text-black px-4 py-2 rounded-xl font-semibold">
                <User size={20} />
                {fullName || "Profile"}
              </div>

              <button
                onClick={handleLogout}
                className="bg-red-500 px-6 py-2 rounded-xl text-white font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-[#8BB6B1] text-black px-6 py-2 rounded-xl font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
