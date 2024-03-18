const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserbyId,
  handleCreateNewUser,
} = require("../controllers/user");

const router = express.Router();

router.get("/", handleGetAllUsers);
// CRUD operations on the user collection

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserbyId);
// Create a new user
router.post("/newUser", handleCreateNewUser);

module.exports = router;
