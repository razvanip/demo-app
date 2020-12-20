import { reduce } from "ramda";

const composeValidations = (validations) => (value) => {
  console.log('VALIDATIONS', validations);
  return reduce(
    (error, validator) => error || validator(value),
    undefined
  )(validations);
}


export default composeValidations;
