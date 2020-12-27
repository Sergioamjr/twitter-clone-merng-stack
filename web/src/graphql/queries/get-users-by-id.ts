import gql from "graphql-tag";
import userFragment from "~graphql/fragments/user";
import tweetFragment from "~graphql/fragments/tweet";

export default gql`
  query getUserById($_id: String!) {
    getUserById(_id: $_id) {
      user {
        ...User
      }
      tweets {
        ...Tweet
      }
    }
  }
  ${userFragment}
  ${tweetFragment}
`;
