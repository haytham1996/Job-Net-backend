import express from "express";
import {
  createPost,
  getPostById,
  getUserPosts,
  uploadImage,
} from "../controllers/postController";

const router = express.Router();

router.post("/", uploadImage, createPost);
router.get("/:id", getPostById);
router.get("/user/:userId", getUserPosts);

export default router;
