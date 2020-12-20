import { reduce } from "ramda";

const composeValidations = (validations) => (value) => {
  return reduce(
    (error, validator) => error || validator(value),
    undefined
  )(validations);
};

export default composeValidations;
