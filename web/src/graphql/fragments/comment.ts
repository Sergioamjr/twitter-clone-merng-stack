import { gql } from "@apollo/client";

export default gql`
  fragment Comment on Comment {
    content
    _id
    authorId
    name
    avatarColor
    userName
    originalTweet
    likedBy
    createdAt
  }
`;
