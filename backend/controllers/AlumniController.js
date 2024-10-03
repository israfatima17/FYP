import { Alumni } from "../Firebase/DBConnection.js";

// Get all alumni data for admin
export const getAdmin = async (req, res) => {
  try {
    const snapshot = await Alumni.get();
    const alumni = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(alumni);
  } catch (error) {
    console.error("Error fetching alumni:", error);
    res.status(500).json({ message: "Error retrieving alumni data" });
  }
};

// Verify if the user is an admin
export const verifyAdmin = async (req, res) => {
  const email = req.body.email;  // Expecting 'email' in the request body
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    console.log(email);
    const snapshot = await Alumni.get();
    const alumni = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const user = alumni.find((u) => u.email === email);  // Finding the user by email

    if (user?.isAdmin) {
      res.send({ isAdmin: true });
    } else {
      res.send({ isAdmin: false });
    }
  } catch (error) {
    console.error("Error verifying admin:", error);
    res.status(500).json({ message: "Error verifying admin" });
  }
};

// Fetch profile by ID
export const getProfile = async (req, res) => {
  const { id } = req.body;  // Expecting 'email' in the request body
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }

  try {
    // Retrieve the alumni document by ID
    const alumniDoc = await Alumni.doc(email).get();

    if (!alumniDoc.exists) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const profile = alumniDoc.data();  // Get the document data
    res.json(profile);  // Send the profile data as a response
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Error retrieving profile" });
  }
};
// Create a new alumni entry
export const createAlumni = async (req, res) => {
  const newAlumni = req.body;  // Get the new alumni data from the request body

  try {
    const docRef = await Alumni.add(newAlumni);  // Add the new data to the collection
    res.json({ id: docRef.id, message: "Alumni created successfully" });
  } catch (error) {
    console.error("Error creating alumni:", error);
    res.status(500).json({ message: "Error creating alumni" });
  }
};
export const getAllAlumni = async (req, res) => {
  try {
    const snapshot = await Alumni.get();
    const alumni = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(alumni);
  } catch (error) {
    console.error("Error fetching alumni:", error);
    res.status(500).json({ message: "Error retrieving alumni data" });
  }
};
// Get alumni by ID
export const getID = async (req, res) => {
  const { id } = req.params; // Extract the ID from the URL parameters

  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }

  try {
    // Retrieve the alumni document by ID
    const alumniDoc = await Alumni.doc(id).get();

    if (!alumniDoc.exists) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const alumniData = { id: alumniDoc.id, ...alumniDoc.data() };
    res.json(alumniData);
  } catch (error) {
    console.error("Error fetching alumni by ID:", error);
    res.status(500).json({ message: "Error retrieving alumni by ID" });
  }
};
export const getVerifiedAlumni = async (req, res) => {
  try {
    // Replace this with your logic to filter verified alumni
    const snapshot = await Alumni.where("isAdmin", "==", true).get();
    const verifiedAlumni = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(verifiedAlumni);
  } catch (error) {
    console.error("Error fetching verified alumni:", error);
    res.status(500).json({ message: "Error retrieving verified alumni" });
  }
};
export const updateAlumni = async (req, res) => {
  const { id } = req.params; // Extract the ID from the URL parameters
  const updatedData = req.body; // Get the updated alumni data from the request body

  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }

  try {
    // Update the alumni document with the provided data
    await Alumni.doc(id).update(updatedData);
    res.json({ message: "Alumni data updated successfully" });
  } catch (error) {
    console.error("Error updating alumni:", error);
    res.status(500).json({ message: "Error updating alumni data" });
  }
};
