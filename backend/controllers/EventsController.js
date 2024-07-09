import { Events } from "../Firebase/DBConnection.js";

export const getAllEvents = async (req, res) => {
  const snapshot = await Events.get();
  const events = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(events);
};
export const createEvents = async (req, res) => {
  const data = req.body;
  console.log(data);
  await Events.add(data);
  res.send({ message: "Event data added", status: "True" });
};
export const deleteEvents = async (req, res) => {
  const id = req.body.id;
  await Events.doc(id).delete();
  res.send({ message: "User data deleted" });
};
