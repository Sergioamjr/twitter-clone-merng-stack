import gql from "graphql-tag";
import fragment from "~graphql/fragments/tweet";

export default gql`
  subscription hasANewTweet {
    hasANewTweet {
      ...Tweet
    }
  }
  ${fragment}
`;
