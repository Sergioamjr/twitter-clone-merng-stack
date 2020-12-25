import gql from "graphql-tag";
import fragment from "~graphql/fragments/tweet";

export default gql`
  mutation getMyFriendsTweets($_id: String!) {
    getMyFriendsTweets(_id: $_id) {
      ...Tweet
    }
  }
  ${fragment}
`;
