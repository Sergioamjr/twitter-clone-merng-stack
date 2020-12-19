import gql from "graphql-tag";
import fragments from "./../fragments/logged-user";

export default gql`
  mutation saveUser(
    $userName: String!
    $name: String!
    $password: String!
    $email: String!
  ) {
    saveUser(
      userName: $userName
      name: $name
      password: $password
      email: $email
    ) {
      ...LoggedUser
    }
  }
  ${fragments}
`;
