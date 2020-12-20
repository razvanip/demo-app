import { propOr } from "ramda";

const selectResidences = propOr([], "residences");

export default selectResidences;
