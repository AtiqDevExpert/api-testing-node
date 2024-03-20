const users = require("../models/user");

const handleGetAllUsers = async (req, res) => {
  const allDbUser = await users.find({});
  if (allDbUser.length > 0) {
    return res.json(allDbUser);
  } else {
    return res.json({ errors: "no users found" });
  }
};
const handleGetUserById = async (req, res) => {
  const user = await users.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  return res.json(user);
};
const handleUpdateUserById = async (req, res) => {
  const user = await users.findByIdAndUpdate(req.params.id);

  const newData = req.body;
  if (user !== undefined) {
    // Exclude _id field from newData
    delete newData._id;
    const updatedUser = Object.assign(user, newData);
    await users.updateOne({ _id: req.params.id }, updatedUser);
    return res.status(201).json({
      status: "Record Updated Successfully",
      User: user._id,
    });
  } else {
    return res.status(404).json({
      error: "User not found",
    });
  }
};
const handleDeleteUserbyId = async (req, res) => {
  try {
    const deletedUser = await users.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    if (deletedUser) {
      return res.json({ status: "Delete Successfully", user: deletedUser });
    }
  } catch (error) {
    console.error(error);
  }
};
const handleCreateNewUser = async (req, res) => {
  const { first_name, last_name, email, job_title, gender } = req.body;
  if (email) {
    const isEmailInUsed = users.isThisEmailInUse(email);
    if (isEmailInUsed) {
      return res.status(409).json({ error: "Email already in used" });
    }
  }

  if (!first_name || last_name || !email || !job_title || !gender) {
    return res.status(400).json({ error: "All fields are required" });
  } else {
    const result = await users.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
      job_title: job_title,
      gender: gender,
    });
    return res
      .status(201)
      .json({ User: result, message: "User Created Successfuly" });
  }
};
// const handleCreateNewUser = async (req, res) => {
//   const isNewUser = users.findOne({ email: req.body.email });
//   if (!isNewUser) {
//     const body = req.body;
//     if (
//       !body &&
//       !body.first_name &&
//       !body.last_name &&
//       !body.email &&
//       !body.job_title &&
//       !body.gender
//     ) {
//       return res.status(400).json({ error: "All fields are required" });
//     } else {
//       const result = await users.create({
//         first_name: body.first_name,
//         last_name: body.last_name,
//         email: body.email,
//         job_title: body.job_title,
//         gender: body.gender,
//       });
//       return res
//         .status(201)
//         .json({ User: result, message: "User Created Successfuly" });
//     }
//   } else {
//     return res.status(409).json({ error: "Email already in use" });
//   }
// };
module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserbyId,
  handleCreateNewUser,
};
