import { gql } from "@apollo/client";

export const ADD_TRANSACTION = gql`
  mutation AddTransaction($description: String!, $amount: Float!) {
    addTransaction(description: $description, amount: $amount) {
      _id
      description
      amount
    }
  }
`;

export const ADD_BUDGET = gql`
  mutation AddBudget($name: String!, $limit: Float!) {
    addBudget(name: $name, limit: $limit) {
      _id
      name
      limit
    }
  }
`;

export const ADD_GOAL = gql`
  mutation AddGoal($name: String!, $target: Float!) {
    addGoal(name: $name, target: $target) {
      _id
      name
      target
    }
  }
`;
