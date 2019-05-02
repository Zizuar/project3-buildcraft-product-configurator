import React from 'react';
import './Component.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const ComponentTwo = (props) => {
  return (
    <div className="ComponentClass" {...props}>
    ComponentTwo
      {props.string}
      {props.array}
    </div>
  );
}

export { ComponentTwo };
