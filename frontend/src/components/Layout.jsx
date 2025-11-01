// src/components/Layout.jsx
import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useTheme } from "@/context/ThemeContext.jsx";

const Layout = ({ children, className = "" }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-950 text-gray-100"
          : "bg-gray-100 text-gray-900"
      } ${className}`}
    >
      <Navbar />

      {/* Wrap main content in a card-like container for better readability in dark mode */}
      <main
        className={`flex-grow p-8 container mx-auto transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-900 text-gray-100"
            : "bg-white text-gray-900"
        } rounded-xl shadow-sm`}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout;
