const mangoose = require("mongoose");

const StudentSchema = new mangoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bloodgroup: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

const Student = mangoose.model("Student", StudentSchema);
module.exports = Student;
