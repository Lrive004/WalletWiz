import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const ADD_TRANSACTION = gql`
  mutation addTransaction($profileId: ID!, $transaction: String!) {
    addTransaction(profileId: $profileId, transaction: $transaction) {
      _id
      username
      transactions
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;
