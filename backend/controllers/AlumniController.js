import { Alumni } from "../Firebase/DBConnection.js";

export const getAllAlumni = async (req, res) => {
  const snapshot = await Alumni.get();
  const alumni = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(alumni);
};

export const getVerifiedAlumni = async (req, res) => {
  const snapshot = await Alumni.get();
  const alumni = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const response = alumni.filter((u) => u.isVerified === true);
  res.send(response);
};


export const createAlumni = async (req, res) => {
  const data = req.body;
  data.isVerified = false;
  console.log(data);
  await Alumni.add(data);
  res.send({ message: "Alumni data added", status: "True" });
};

export const updateAlumniByEmail = async (req, res) => {
  const { id, email, ...updateData } = req.body; // Destructure id, email and other data
  if (!id) {
    return res.status(400).json({ message: "Alumni ID is required" });
  }

  try {
    const snapshot = await Alumni.doc(id).get();

    if (!snapshot.exists) {
      return res.status(404).json({ message: "Alumni not found" });
    }

    // Update the alumni document with new data
    await Alumni.doc(id).update({ ...updateData });

    res.send({ message: "Alumni data updated successfully" });
  } catch (error) {
    console.error("Error updating alumni:", error);
    res.status(500).json({ message: error.message });
  }
};


export const getProfile = async (req, res) => {
  try {
    const email = req.body.email; // Extract email from the request body
    if (!email) {
      return res.status(400).json({ message: "Email is empty" });
    }

    // Query to find the document by email
    const snapshot = await Alumni.where("email", "==", email).get();
    
    if (snapshot.empty) {
      return res.status(404).json({ message: "Alumni profile not found", email });
    }

    // Map the documents to extract data
    const alumniData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(alumniData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};


export const getID = async (req, res) => {
  const { email } = req.body;
  console.log("Searching for email:", email); // Log email for debugging

  try {
    const snapshot = await Alumni.get();
    const allUsers = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const user = allUsers.find((user) => user.email === email);

    if (!user) {
      console.log("No matching documents found.");
      return res.status(404).send({ message: "User not found" });
    }
    res.send({ user });
  } catch (error) {
    console.error("Error fetching alumni:", error);
    res.status(500).json({ message: error.message });
  }
};
