const User = require("../models").User;
module.exports = {
  //Get all
  getAll(req, res) {
    return User.findAll({})
      .then(result => res.status(200).send(result))
      .catch(error => res.status(400).send(error));
  },
  //Get one
  getOne(req, res) {
    return User.findAll({
      limit: 1,
      where: {
        id: req.params.id //your where conditions, or without them if you need ANY entry
      }
    })
      .then(result => res.status(200).send(result))
      .catch(error => res.status(400).send(error));
  },
  // Create One
  create(req, res) {
    return User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    })
      .then(User => res.status(201).send(User))
      .catch(error => res.status(400).send(error));
  },
  // Delete one
  delete(req, res) {
    return User.destroy({
      where: {
        id: req.body.id //your where conditions, or without them if you need ANY entry
      }
    })
      .then(result => res.sendStatus(200).send(result))
      .catch(error => res.status(400).send(error));
  },
  // Update one
  update(req, res) {
    return User.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
      },
      { where: { id: req.body.id } }
    )
      .then(result => res.status(200).send(result))
      .catch(error => res.status(400).send(error));
  }
};
