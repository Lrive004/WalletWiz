const typeDefs = `
    type User {
        _id: ID
        name: String
        email: String
        password: String
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Transaction {
        id: ID!
        amount: Int!
        date: String!
        user: User!
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
        transactions: [Transaction!]
        transaction(id: ID!): Transaction
    }

    type Mutation {
       register(username: String!, email: String!, password: String!): User!
       addTransaction(userId: ID!, amount: Int!): Transaction! 
    }
`

module.exports = typeDefs;