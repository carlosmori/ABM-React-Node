const UserCredentials = require("../models").userCredentials;
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "1234";

module.exports = {
  async login(req, res) {
    try {
      const { name, password } = req.body;
      if (!name || !password)
        throw new Error("You must provide a name and password");
      const user = await UserCredentials.findOne({
        where: {
          name
        }
      });
      if (user && user.password === password) {
        const { id, name } = user;
        jwt.sign({ id, name }, secret, { expiresIn: 36000 }, (error, token) => {
          //Short circuit
          // err && res.status(500).json({ error: "Error signing token", raw: err });
          error
            ? res.status(500).json({ error: "Error signing token", raw: err })
            : res.json({
                success: true,
                token: `Bearer ${token}`
              });
        });
      } else {
        res.status(200).json({ msg: "No such user found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  }
};
