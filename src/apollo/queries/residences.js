import { gql } from "@apollo/client";

const GET_RESIDENCES = gql`
  query getResidences {
    residences
      @rest(type: "ResidenceQuery", method: "GET", path: "residences") {
      zipCode
      number
      latitude
      longitude
      numberOfResidences
      id
    }
  }
`;

export default GET_RESIDENCES;
