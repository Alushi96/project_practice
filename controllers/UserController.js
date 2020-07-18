const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))   
  },
  create: function(req, res) {
      var newdata = req.body
    db.User
      .create(newdata)
      .then(dbModel => res.json(dbModel))
  },
  update: function(req, res) {
    var newdata = req.body
    console.log(newdata.id)
    db.User
    .findOneAndUpdate({ _id: req.params.id }, { $push: { doctor: newdata.id } }, { new: true })
      .then(dbModel => res.json(dbModel))
  },
  login: function(req, res) {
    db.User
      .find({Email: req.body.userName, Password: req.body.password})
      .then(dbModel => res.json(dbModel))
  }
};