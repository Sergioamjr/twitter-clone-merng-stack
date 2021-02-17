import gql from "graphql-tag";
import fragment from "~graphql/fragments/comment";

export default gql`
  query getComments {
    getComments {
      ...Comment
    }
  }
  ${fragment}
`;
