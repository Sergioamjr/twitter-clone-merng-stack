import gql from "graphql-tag";
import fragment from "../fragments/tweet";

export default gql`
  query getTweets {
    getTweets {
      ...Tweet
    }
  }
  ${fragment}
`;
