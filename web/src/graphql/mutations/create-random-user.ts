import gql from "graphql-tag";
import fragments from "~graphql/fragments/logged-user";

export default gql`
  mutation createRandomUser {
    createRandomUser {
      ...LoggedUser
    }
  }
  ${fragments}
`;
