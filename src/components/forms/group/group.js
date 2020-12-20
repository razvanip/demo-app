import React, { Children, cloneElement, isValidElement } from "react";
import { any, map, pipe, gt, length, __, propEq } from "ramda";
import Label from "../label";
import Required from "../required";
import Message from "../message";

import "./group.css";

const hasError = propEq("type", "error");
const hasSuccess = propEq("type", "success");
const hasMessages = pipe(length, gt(__, 0));

const Group = ({
  label,
  labelPosition,
  error,
  success,
  title,
  disabled,
  required,
  type,
  messages,
  children,
}) => {
  const hasErrors = error || any(hasError, messages);
  const hasSuccesses = success || any(hasSuccess, messages);

  const labelComponent = !!label && (
    <Label type={type} title={title} disabled={disabled} label={label} />
  );

  const requiredComponent = !!required && (
    <Required labelPosition={labelPosition} />
  );

  return (
    <div className="group">
      {labelPosition === "before" && labelComponent}
      {labelPosition === "before" && labelComponent && requiredComponent}
      {Children.map(
        children,
        (item) =>
          isValidElement(item) &&
          cloneElement(item, {
            error: hasErrors,
            success: hasSuccesses,
          })
      )}
      {hasMessages(messages) && <div>{map(Message, messages)}</div>}
      {labelPosition === "after" && labelComponent}
      {labelPosition === "after" && labelComponent && requiredComponent}
    </div>
  );
};

Group.defaultProps = {
  messages: [],
  required: false,
};
export default Group;
