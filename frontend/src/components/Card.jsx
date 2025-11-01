// src/components/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@/context/ThemeContext.jsx';

const Card = ({ title, children, className = '', ...rest }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-2xl shadow-md p-6 border transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gray-800 border-gray-700 text-gray-100'
          : 'bg-blue-50 border-blue-100 text-gray-900'
      } ${className}`}
      {...rest}
    >
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
