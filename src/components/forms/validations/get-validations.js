import { cond, identity, is } from "ramda";
import composeValidations from "./compose-validations";

const isFunction = is(Function);
const isArray = is(Array);

const getValidations = cond([
  [isFunction, identity],
  [isArray, composeValidations],
]);

export default getValidations;
