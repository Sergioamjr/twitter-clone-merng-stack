import gql from "graphql-tag";
import fragment from "../fragments/user";

export default gql`
  query getUsers {
    getUsers {
      ...User
    }
  }
  ${fragment}
`;
