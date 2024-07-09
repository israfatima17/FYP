import express from "express";
import {
  deleteEvents,
  createEvents,
  getAllEvents,
} from "../controllers/EventsController.js";
const router = express.Router();
// get all alumni
router.get("/", getAllEvents);

router.post("/create", createEvents);

router.post("/delete", deleteEvents);

export default router;
