import express from "express";
import {
  createAlumni,
  getAllAlumni,
  getID,
  getProfile,
  getVerifiedAlumni,
  updateAlumniByEmail,
} from "../controllers/AlumniController.js";

const router = express.Router();

// Get all verified alumni
router.get("/", getVerifiedAlumni);

// Get all alumni
router.get("/all", getAllAlumni);

// Create a new alumni
router.post("/create", createAlumni);

// Update alumni by email
router.post("/update", updateAlumniByEmail); // Modified to use updateAlumniByEmail

// Get alumni by ID
router.post("/getId", getID);

// Get alumni profile by email
router.post("/getProfile", getProfile);

export default router;
