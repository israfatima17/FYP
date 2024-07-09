import express from "express";
import { getAdmin, verifyAdmin } from "../controllers/AdminController.js";
const router = express.Router();
// get all alumni
router.get("/", getAdmin);

// verify admin
router.post("/verify", verifyAdmin);
export default router;
