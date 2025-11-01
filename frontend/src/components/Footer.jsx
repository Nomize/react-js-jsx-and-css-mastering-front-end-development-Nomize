import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@/context/ThemeContext.jsx';

const Footer = ({ className = '' }) => {
  const { theme } = useTheme();

  return (
    <footer
      className={`text-center py-4 mt-10 border-t transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-gray-900 text-gray-300 border-gray-700'
          : 'bg-gray-100 text-gray-600 border-gray-200'
      } ${className}`}
    >
      <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
      <div className="space-x-3 mt-2">
        <a
          href="#"
          className={`hover:underline ${
            theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
          }`}
        >
          Privacy
        </a>
        <a
          href="#"
          className={`hover:underline ${
            theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
          }`}
        >
          Terms
        </a>
        <a
          href="#"
          className={`hover:underline ${
            theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
          }`}
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
