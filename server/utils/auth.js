const { GraphQlError } = require("graphql");
const jwt = require("jsonwebtoken");

const secret = "thisisasecretpassword";
const expiration = "2hr";

module.exports = {
  AuthenticationError: new GraphQlError("Could not authenticate user.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
