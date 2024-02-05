import express from "express";
import {
  createApplication,
  getAllApplications,
  getApplicationById,
  respondToApplication,
} from "../controllers/applicationController";

const router = express.Router();

router.post("/", createApplication);
router.get("/:id", getApplicationById);
router.get("/", getAllApplications);
router.patch("/:id", respondToApplication);

export default router;
