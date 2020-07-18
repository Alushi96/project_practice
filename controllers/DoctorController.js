const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Doctor
      .find(req.query)
      .then(dbModel => res.json(dbModel))
  },
  findById: function(req, res) {
    db.Doctor
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))   
  },
  create: function(req, res) {
      var newdata = req.body

    db.Doctor
      .create(newdata)
      .then(dbModel => res.json(dbModel))
  },
  update: function(req, res) {
    var newdata = req.body
    db.Doctor
      .findOneAndUpdate({ _id: req.params.id }, { $push: { patient: newdata._id } }, { new: true })
      .then(dbModel => res.json(dbModel))
  },
  signup: function(req, res) {
    var newdata = req.body
    console.log(newdata);
    db.Doctor
      .findOneAndUpdate({ _id: req.params.id }, newdata)
      .then(dbModel => res.json(dbModel))
  },
  login: function(req, res) {
    db.Doctor
      .find({Email: req.body.userName, Password: req.body.password})
      .then(dbModel => res.json(dbModel))
  }
};