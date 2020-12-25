import gql from "graphql-tag";
import fragments from "~graphql/fragments/logged-user";

export default gql`
  mutation addToFriends($_id: String!, $newFriendId: String!, $token: String!) {
    addToFriends(_id: $_id, newFriendId: $newFriendId, token: $token) {
      ...LoggedUser
    }
  }
  ${fragments}
`;
