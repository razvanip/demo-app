import React from "react";
import classnames from "classnames";

import "./input.css";

const Input = ({ label, error, success, ...rest }) => {
  const classes = classnames("input", {
    "input--error": error,
    "input--success": success,
  });

  return (
    <div>
      <input className={classes} type="text" {...rest} />
    </div>
  );
};

export default Input;
