import { gql } from "@apollo/client";

export default gql`
  fragment User on User {
    email
    name
    userName
    _id
    friends
  }
`;
