const UserCredentials = require("../models").userCredentials;
const jwt = require("jsonwebtoken");

module.exports = {
  //   async login(req, res, next) {
  //     const { name, password } = req.body;
  //     if (name && password) {
  //       // we get the user with the name and save the resolved promise
  //       returned;
  //       let user = await UserCredentials.finOne({
  //         where: {
  //           name
  //         }
  //       });
  //       if (!user) {
  //         return res.status(401).json({ msg: "No such user found", user });
  //       }
  //       if (user.password === password) {
  //         // from now on we’ll identify the user by the id and the id is
  //         // the only personalized value that goes into our token
  //         let payload = { id: user.id };
  //         let token = jwt.sign(payload, jwtOptions.secretOrKey);
  //         return res.json({ msg: "ok", token: token });
  //       } else {
  //         return res.status(401).json({ msg: "Password is incorrect" });
  //       }
  //     } else {
  //       res.status(403).json({
  //         msg: "Access denied"
  //       });
  //     }
  //   }
};
