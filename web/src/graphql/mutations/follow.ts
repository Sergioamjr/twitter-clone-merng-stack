import gql from "graphql-tag";
import fragments from "~graphql/fragments/logged-user";

export default gql`
  mutation follow($_id: String!, $followingId: String!, $token: String!) {
    follow(_id: $_id, followingId: $followingId, token: $token) {
      ...LoggedUser
    }
  }
  ${fragments}
`;
