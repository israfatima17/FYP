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
  res.send({ message: "Almuni data added", status: "True" });
};
export const updateAlumni = async (req, res) => {
  const id = req.body.id;
  delete req.body.id;
  await Alumni.doc(id).update(req.body);
  res.send({ message: "User data updated" });
};
export const getProfile = async (req, res) => {
  const id = req.body.id;
  const snapshot = await Alumni.doc(id).get();
  res.send(snapshot.data());
};
export const getID = async (req, res) => {
  const email = req.body.email;
  console.log(email);
  const snapshot = await Alumni.get();
  const alumni = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const user = alumni.filter((u) => u.email === email)[0];
  console.log(user);
  res.send({ id: user.id });
};
