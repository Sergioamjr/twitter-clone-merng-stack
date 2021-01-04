import gql from "graphql-tag";
import fragments from "~graphql/fragments/logged-user";

export default gql`
  mutation login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      ...LoggedUser
    }
  }
  ${fragments}
`;
