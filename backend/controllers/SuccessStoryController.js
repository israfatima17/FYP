import { SuccessStory } from "../Firebase/DBConnection.js";

export const getAllSuccessStories = async (req, res) => {
  const snapshot = await SuccessStory.get();
  const successStories = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  res.send(successStories);
};

export const createSuccessStory = async (req, res) => {
  const data = req.body;
  console.log(data);
  await SuccessStory.add(data);
  res.send({ message: "Success Story data added", status: "True" });
};

export const deleteSuccessStory = async (req, res) => {
  const id = req.body.id;
  await SuccessStory.doc(id).delete();
  res.send({ message: "User data deleted" });
};
