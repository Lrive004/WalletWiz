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

    type Query {
        users: [User]!
        user(userId: ID!): User
    }
`

module.exports = typeDefs;