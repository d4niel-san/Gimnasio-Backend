const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classScheme = new Schema(
  {
    classNumber: { type: Number, required: true },
    teacherFirstName: { type: String, required: true },
    teacherLastName: { type: String, required: true },
    className: { type: String, required: true },
    classStartHour: { type: Number, required: true },
    classDescription: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

const Class = mongoose.model("classes", classScheme);

module.exports = Class;
