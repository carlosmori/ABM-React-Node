const { Strategy, ExtractJwt } = require("passport-jwt");
const secret = process.env.SECRET || "1234";
const userCredentials = require("./models").userCredentials;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
};
//this sets how we handle tokens coming from the requests that come
// and also defines the key to be used when verifying the token.
module.exports = passport => {
  passport.use(
    new Strategy(opts, (payload, done) => {
      userCredentials
        .findOne({
          where: {
            id: payload.id
          }
        })
        .then(user => {
          if (user) {
            return done(null, {
              id: user.id,
              name: user.name
            });
          }
          return done(null, false);
        });
    })
  );
};
