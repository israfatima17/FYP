import { News } from "../Firebase/DBConnection.js";

export const getAllNews = async (req, res) => {
  const snapshot = await News.get();
  const news = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(news);
  res.send(news);
};
export const createNews = async (req, res) => {
  const data = req.body;
  console.log(data);
  await News.add(data);
  res.send({ message: "news data added", status: "True" });
};
export const deleteNews = async (req, res) => {
  const id = req.body.id;
  await News.doc(id).delete();
  res.send({ message: "User data deleted" });
};
