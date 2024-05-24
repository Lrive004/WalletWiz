const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
    },
    // Mutation: {
    //     register: async (_, { username, email, password }) => {
    //         return User.findOne({ email });

 
    //     }

    // }
};

module.exports = resolvers;