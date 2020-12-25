import gql from "graphql-tag";
import fragment from "~graphql/fragments/user";

export default gql`
  query getUsers {
    getUsers {
      ...User
    }
  }
  ${fragment}
`;
