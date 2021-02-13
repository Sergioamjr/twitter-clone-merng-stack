import { gql } from "@apollo/client";

export default gql`
  fragment LoggedUser on LoggedUser {
    _id
    color
    name
    token
    email
    userName
    friends
  }
`;
