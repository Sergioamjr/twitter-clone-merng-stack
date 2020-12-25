import gql from "graphql-tag";
import fragment from "~graphql/fragments/tweet";

export default gql`
  mutation newTweet($content: String, $token: String!) {
    newTweet(content: $content, token: $token) {
      ...Tweet
    }
  }
  ${fragment}
`;
