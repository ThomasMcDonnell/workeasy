import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const GradientLink = ({ to, text, size }) => {
  const classes = classNames({
    'flex justify-center rounded py-2 px-6 bg-gradient-to-r bg-purple-500 bg-purple-400 focus:outline-none shadow-lg text-white': true,
    'text-xl': size === 'lg'
  });
  return (
    <Link to={to} className={classes}>
      {text}
    </Link>
  );
};

export default GradientLink;