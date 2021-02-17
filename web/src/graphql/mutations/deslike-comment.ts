import gql from "graphql-tag";
import fragment from "~graphql/fragments/comment";

export default gql`
  mutation deslikeComment($_id: String!, $token: String!) {
    deslikeComment(_id: $_id, token: $token) {
      ...Comment
    }
  }
  ${fragment}
`;
