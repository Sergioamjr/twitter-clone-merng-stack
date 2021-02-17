import gql from "graphql-tag";
import fragment from "~graphql/fragments/comment";

export default gql`
  query getCommentsByTweetId($_id: String!) {
    getCommentsByTweetId(_id: $_id) {
      ...Comment
    }
  }
  ${fragment}
`;
