import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      transactions {
        _id
        description
        amount
      }
      budgets {
        _id
        name
        limit
      }
      goals {
        _id
        name
        target
      }
    }
  }
`;
