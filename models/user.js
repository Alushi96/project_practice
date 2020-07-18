const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Email: { type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"],required: true },
  Password: {type: String, required: true},
  Name: { type: String, required: true },
  Surname: { type: String, required: true },
  PhoneNumber: { type: Number, required: true },
  DOB: { type: String, required: true },
  Doctor: {type: Boolean, required: true},
  Address: { type: String, required: true },
  // type: { type: String, required: true },
  // appointmentdate: { type: Number, required: false }
  doctor: [
    {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;