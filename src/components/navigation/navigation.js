import { always, applySpec, identity, map, pipe } from "ramda";

import NavigationItem from "./navigation-item";
import Container from "../container";

import selectNavigation from "../../selectors/navigation";

import "./navigation.css";

const Navigation = pipe(
  selectNavigation,
  map(NavigationItem),
  applySpec({
    className: always("navigation"),
    children: identity,
  }),
  Container
);

export default Navigation;
