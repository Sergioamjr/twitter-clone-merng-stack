import gql from "graphql-tag";
import fragment from "~graphql/fragments/comment";

export default gql`
  mutation newComment(
    $content: String
    $token: String!
    $originalTweet: String!
  ) {
    newComment(
      content: $content
      token: $token
      originalTweet: $originalTweet
    ) {
      ...Comment
    }
  }
  ${fragment}
`;
