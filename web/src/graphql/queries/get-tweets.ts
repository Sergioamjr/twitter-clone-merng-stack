import gql from "graphql-tag";
import fragment from "~graphql/fragments/tweet";

export default gql`
  query getTweets {
    getTweets {
      ...Tweet
    }
  }
  ${fragment}
`;
