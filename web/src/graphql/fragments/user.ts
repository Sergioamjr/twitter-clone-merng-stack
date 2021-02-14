import { gql } from "@apollo/client";

export default gql`
  fragment User on User {
    email
    color
    name
    userName
    _id
    followers
    following
  }
`;
