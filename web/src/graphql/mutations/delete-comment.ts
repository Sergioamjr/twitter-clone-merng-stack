import gql from "graphql-tag";

export default gql`
  mutation deleteComment($_id: String!, $token: String!) {
    deleteComment(_id: $_id, token: $token)
  }
`;
