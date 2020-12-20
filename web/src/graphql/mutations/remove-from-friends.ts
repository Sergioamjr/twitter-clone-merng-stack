import gql from "graphql-tag";
import fragments from "./../fragments/logged-user";

export default gql`
  mutation removeFromFriends(
    $_id: String!
    $friendId: String!
    $token: String!
  ) {
    removeFromFriends(_id: $_id, friendId: $friendId, token: $token) {
      ...LoggedUser
    }
  }
  ${fragments}
`;
