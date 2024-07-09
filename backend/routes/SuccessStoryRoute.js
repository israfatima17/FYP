import express from "express";
import {
  createSuccessStory,
  deleteSuccessStory,
  getAllSuccessStories,
} from "../controllers/SuccessStoryController.js";
const router = express.Router();
// get all alumni
router.get("/", getAllSuccessStories);

router.post("/create", createSuccessStory);

router.post("/delete", deleteSuccessStory);

export default router;
