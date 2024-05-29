const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;

module.exports = {
  AuthenticationError: new GraphQLError("Could not authenticate user.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
