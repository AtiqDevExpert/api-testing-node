const mongoose = require("mongoose");
// Schemas for users
const usersSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    job_title: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
usersSchema.statics.isThisEmailInUse = async function (email) {
  try {
    const isUserExits = await this.findOne({ email });
    if (isUserExits) return false;
    return true;
  } catch (error) {
    console.log("Error in method", error.message);
  }
};
const users = mongoose.model("users", usersSchema);

module.exports = users;
