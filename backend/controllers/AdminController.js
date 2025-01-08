import { Alumni } from "../Firebase/DBConnection.js";

export const getAdmin = async (req, res) => {
  const snapshot = await Alumni.get();
  const alumni = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(alumni);
};
export const verifyAdmin = async (req, res) => {
  const email = req.body.email;
  console.log(email);
  const snapshot = await Alumni.get();
  const alumni = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const user = alumni.filter((u) => u.email === email)[0];
  console.log(user);

  if (user?.isAdmin) {
    res.send({ isAdmin: true });
  } else {
    res.send({ isAdmin: false });
  }
};
