const UserCredentials = require("../models").userCredentials;
module.exports = {
  async createUser(req, res) {
    try {
      const { name, password } = req.body;
      if (!name || !password) {
        throw new Error("You must set a name and password");
      }
      const result = await UserCredentials.create({
        name,
        password
      });
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  },
  async getAllUserCredentials(req, res) {
    try {
      const result = await UserCredentials.findAll({});
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  },
  async getUserCredentials(req, res) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("You must provide an id");
      const result = await UserCredentials.findOne({
        where: {
          id
        }
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  }
};
