import { gql } from "apollo-server";
import { types as userTypes } from "./User/types";
import { types as tweetTypes } from "./Tweet/types";

const root = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

export default [root, userTypes, tweetTypes];
