import gql from "graphql-tag";
import fragment from "../fragments/tweet";

export default gql`
  mutation getTweetByUserID($_id: String!) {
    getTweetByUserID(_id: $_id) {
      ...Tweet
    }
  }
  ${fragment}
`;
