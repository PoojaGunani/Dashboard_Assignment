import React from 'react';
import { Link } from 'react-router-dom';
const Logo = (props) => {
  return <Link to="/">
  <img src="/images/logo.jpeg" alt="Logo" {...props} />
</Link>;
};

export default Logo;
