import { reduce } from "ramda";

// todo: can be refactored to be `point free`
const composeValidations = (validations) => (value) => {
  return reduce(
    (error, validator) => error || validator(value),
    undefined
  )(validations);
};

export default composeValidations;
