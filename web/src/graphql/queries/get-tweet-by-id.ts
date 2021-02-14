import gql from "graphql-tag";
import tweetFragment from "~graphql/fragments/tweet";

export default gql`
  query getTweetById($_id: String!) {
    getTweetById(_id: $_id) {
      ...Tweet
    }
  }
  ${tweetFragment}
`;
