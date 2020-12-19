import gql from "graphql-tag";
import fragment from "../fragments/tweet";

export default gql`
  mutation like($_id: String, $token: String!) {
    like(_id: $_id, token: $token) {
      ...Tweet
    }
  }
  ${fragment}
`;
