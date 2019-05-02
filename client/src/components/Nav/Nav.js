import React from 'react';
import './Nav.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Nav = (props) => (
  <span className="NavClass" {...props}>
    Nav
  </span>
);

export { Nav };
