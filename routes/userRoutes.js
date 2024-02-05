import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  register,
  updateUser,
} from "../controllers/userController";

const router = express.Router();

router.post("/", register);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUserById);
router.get("/", getAllUsers);

export default router;
