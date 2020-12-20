import React from "react";
import Group from "../group";

const withGroup = (
  WrappedComponent,
  labelPosition = "before",
  type = "input"
) => {
  const withGroupComponent = (props) => {
    const { label, title, messages, ...wrappedProps } = props;

    return (
      <Group
        label={label}
        title={title}
        messages={messages}
        {...wrappedProps}
        type={type}
        labelPosition={labelPosition}
      >
        <WrappedComponent {...wrappedProps} />
      </Group>
    );
  };

  return withGroupComponent;
};

export default withGroup;
