import gql from "graphql-tag";
import fragment from "~graphql/fragments/comment";

export default gql`
  mutation likeComment($_id: String!, $token: String!) {
    likeComment(_id: $_id, token: $token) {
      ...Comment
    }
  }
  ${fragment}
`;
