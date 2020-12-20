import React from "react";
import classnames from "classnames";

import './label.css';

const Label = ({ disabled, htmlFor, label, className, children, ...rest }) => {
  const classes = classnames("label", className, {
    "label--clickable": Boolean(htmlFor),
    "label--disabled": disabled,
  });

  return (
    <label className={classes} {...rest}>
      {children || label}
    </label>
  );
};

export default Label;
