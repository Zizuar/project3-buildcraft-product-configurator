import React from "react";

const CategoryGroup = props => {
  const { items } = props;

  return (
    <ul className="list-group">
      {items.map(item => (
        <li key={item._id} className="list-group-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoryGroup;
