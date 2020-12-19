import gql from "graphql-tag";

export default gql`
  mutation deleteTweet($_id: String, $token: String!) {
    deleteTweet(_id: $_id, token: $token)
  }
`;
