import React from "react";
import { Link } from "react-router-dom";

const NavigationItem = ({ title, path }) => {
  return (
    <Link className="navigation__item" key={title} to={path}>
      {title}
    </Link>
  );
};

export default NavigationItem;
