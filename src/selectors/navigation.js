import { pathOr } from "ramda";

const selectNavigation = pathOr([], ["config", "navigation"]);

export default selectNavigation;
