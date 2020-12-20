import { gql } from "@apollo/client";

const ADD_RESIDENCE = gql`
  mutation addResidence {
    createResidence(values: $values)
      @rest(
        type: "ResidenceMutation"
        method: "POST"
        path: "residences"
        bodyKey: "values"
      ) {
      zipCode
      number
      latitude
      longitude
      numberOfResidences
      id
    }
  }
`;

export default ADD_RESIDENCE;
