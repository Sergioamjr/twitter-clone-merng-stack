import gql from "graphql-tag";
import fragments from "~graphql/fragments/logged-user";

export default gql`
  mutation unfollow($_id: String!, $unfollowingId: String!, $token: String!) {
    unfollow(_id: $_id, unfollowingId: $unfollowingId, token: $token) {
      ...LoggedUser
    }
  }
  ${fragments}
`;
