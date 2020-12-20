import { gql } from "@apollo/client";

export default gql`
  fragment LoggedUser on LoggedUser {
    _id
    name
    token
    email
    userName
    friends
  }
`;
