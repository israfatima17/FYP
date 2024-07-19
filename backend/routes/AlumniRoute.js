import express from "express";
import {
  createAlumni,
  getAllAlumni,
  getID,
  getProfile,
  getVerifiedAlumni,
  updateAlumni,
} from "../controllers/AlumniController.js";
const router = express.Router();
// get all alumni
router.get("/", getVerifiedAlumni);

router.get("/all", getAllAlumni);

router.post("/create", createAlumni);

router.post("/update", updateAlumni);

router.post("/getId", getID);

router.post("/getProfile", getProfile);
export default router;
