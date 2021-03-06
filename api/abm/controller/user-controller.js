const User = require("../models").User;
module.exports = {
  //Get all
  async getAll(req, res) {
    try {
      const users = await User.findAll({});
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  },
  //Get one
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findOne({
        where: { id }
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  },
  // Create One
  async create(req, res) {
    try {
      const { firstName, lastName, email } = req.body;
      const userCreated = await User.create({
        firstName,
        lastName,
        email
      });
      return res.status(201).json(userCreated);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  },
  // Delete one
  async delete(req, res) {
    try {
      const { id } = req.body;
      const deletedUser = await User.destroy({
        where: { id }
      });
      const response = deletedUser
        ? `User with id ${id} deleted successfully`
        : `No user found that matched provided criteria`;
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  },
  // Update one
  async update(req, res) {
    try {
      const { firstName, lastName, email, id } = req.body;
      const userUpdated = await User.update(
        {
          firstName,
          lastName,
          email
        },
        { where: { id } }
      );
      const response = userUpdated[0]
        ? `User with id ${id} updated successfully`
        : `No user found that matched provided criteria`;
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  }
};
