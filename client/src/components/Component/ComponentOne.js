import React from 'react';
import './Component.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const ComponentOne = (props) => {
  return (
    <div className="ComponentClass" {...props}>
    ComponentOne
      {props.string}
      {props.array}
    </div>
  );
}

export { ComponentOne };
