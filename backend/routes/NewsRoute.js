import express from "express";
import {
  createNews,
  deleteNews,
  getAllNews,
} from "../controllers/NewsController.js";
const router = express.Router();
// get all alumni
router.get("/", getAllNews);

router.post("/create", createNews);

router.post("/delete", deleteNews);

export default router;
