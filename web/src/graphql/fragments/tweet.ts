import { gql } from "@apollo/client";

export default gql`
  fragment Tweet on Tweet {
    content
    _id
    color
    authorId
    name
    userName
    likedBy
    createdAt
  }
`;
