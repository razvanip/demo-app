import React from "react";
import classnames from "classnames";

import "./message.css";

const Message = ({ type, children }) => {
  const classes = classnames("message", {
    [`message--${type}`]: true,
  });

  return <span className={classes}>{children}</span>;
};

export default Message;
