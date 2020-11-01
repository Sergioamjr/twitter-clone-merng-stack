import { gql } from "apollo-server";
import { types } from "./User/types";

const root = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

export default [root, types];
