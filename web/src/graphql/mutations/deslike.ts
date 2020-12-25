import gql from "graphql-tag";
import fragment from "~graphql/fragments/tweet";

export default gql`
  mutation deslike($_id: String, $token: String!) {
    deslike(_id: $_id, token: $token) {
      ...Tweet
    }
  }
  ${fragment}
`;
