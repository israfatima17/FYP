import { Alumni } from "../Firebase/DBConnection.js";

// Fetch all alumni
export const getAllAlumni = async (req, res) => {
  try {
    const snapshot = await Alumni.get();
    const alumni = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(alumni);
  } catch (error) {
    console.error('Error fetching all alumni:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Fetch all verified alumni
export const getVerifiedAlumni = async (req, res) => {
  try {
    const snapshot = await Alumni.get();
    const alumni = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const response = alumni.filter((u) => u.isVerified === true);
    res.send(response);
  } catch (error) {
    console.error('Error fetching verified alumni:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new alumni record
export const createAlumni = async (req, res) => {
  try {
    const data = req.body;
    data.isVerified = false;
    await Alumni.add(data);
    res.send({ message: "Alumni data added", status: "True" });
  } catch (error) {
    console.error('Error creating alumni record:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an existing alumni record
export const updateAlumni = async (req, res) => {
  try {
    const id = req.body.id;
    delete req.body.id;
    await Alumni.doc(id).update(req.body);
    res.send({ message: "User data updated" });
  } catch (error) {
    console.error('Error updating alumni record:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Fetch profile by ID
export const getProfile = async (req, res) => {
  try {
    const id = req.params.id; // Use route parameter for ID
    if (!id) {
      return res.status(400).json({ error: 'ID parameter is missing' });
    }
    const snapshot = await Alumni.doc(id).get();
    if (!snapshot.exists) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.send(snapshot.data());
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Fetch ID by email
export const getID = async (req, res) => {
  try {
    const email = req.query.email; // Use query parameter for email
    if (!email) {
      return res.status(400).json({ error: 'Email parameter is missing' });
    }
    const snapshot = await Alumni.get();
    const alumni = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const user = alumni.find((u) => u.email === email);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.send({ id: user.id });
  } catch (error) {
    console.error('Error fetching user ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
