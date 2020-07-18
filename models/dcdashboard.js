
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const dcdashboardSchema = new Schema({
    helthproblems: String,
    medications: String,
    directives: String,
    patientsearch: String,
    history: String,
  });
  
  const Dcdashboard = mongoose.model("Dcdashboard", dcdashboardSchema);
  
  module.exports = Dcdashboard;