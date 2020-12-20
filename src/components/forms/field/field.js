import React from "react";
import { Field as FieldFinalForm } from "react-final-form";
import getValidations from "../validations/get-validations";

const Field = ({ name, label, required, disabled, validate, component }) => {
  const FieldComponent = component;

  const validations = getValidations(validate);

  return (
    <FieldFinalForm
      name={name}
      validate={disabled ? null : validations}
      render={({ input, meta }) => {
        const messages = meta.touched &&
          meta.error && [{ type: "error", children: meta.error }];

        return (
          <FieldComponent
            {...input}
            label={label}
            required={required}
            messages={messages}
          />
        );
      }}
    />
  );
};

export default Field;
