import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ThemeSwitcher from "./ThemeSwitcher.jsx"; // ✅ import your existing component
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="flex flex-wrap justify-between items-center px-6 py-4 
                 transition-colors duration-500 shadow-md 
                 bg-blue-200 dark:bg-gray-900 text-black dark:text-gray-100"
    >
      {/* Logo */}
      <div className="font-bold text-xl">WELCOME</div>

      {/* Mobile Menu Toggle */}
      <button
        className="sm:hidden text-black dark:text-gray-100"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Nav Links */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row sm:items-center sm:space-x-6 
        w-full sm:w-auto mt-4 sm:mt-0 space-y-4 sm:space-y-0`}
      >
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="hover:underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          Home
        </Link>

        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
          className="hover:underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          About
        </Link>

<Link
  to="/posts"
  onClick={() => setMenuOpen(false)}
  className="hover:underline hover:text-blue-800 dark:hover:text-blue-300"
>
  Posts
</Link>

        {/* ✅ Use ThemeSwitcher directly */}
        <div className="sm:ml-4">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logoText: PropTypes.string,
  className: PropTypes.string,
};

export default Navbar;
