import React from "react";
import classnames from "classnames";
import "./required.css";

const Required = ({ labelPosition }) => {
  const classes = classnames("required", `required--${labelPosition}`);
  return <div className={classes} />;
};

export default Required;
