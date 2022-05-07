const mongoose = require("mongoose");
const validate = require("mongoose-validator");
const Schema = mongoose.Schema;
const isEmail = validate({ validator: "isEmail" });
const { ObjectID } = Schema.Types;

const userScheme = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      validate: isEmail,
    },
    password: { type: String, required: true },
    suscribed: { type: Boolean, required: true, default: true },
    payment: {
      type: String,
      required: true,
      enum: ["daily", "weekly", "biweekly", "monthly", "semiAnnual", "annual"],
      default: "monthly",
    },
    classes: [{ type: ObjectID, ref: "classes" }],
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

const User = mongoose.model("users", userScheme);

module.exports = User;
