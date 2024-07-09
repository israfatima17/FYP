import express from "express";
import cors from "cors";
import AlumniRoute from "./routes/AlumniRoute.js";
import NewsRoute from "./routes/NewsRoute.js";
import EventsRoute from "./routes/EventsRoute.js";
import SuccessStoryRoute from "./routes/SuccessStoryRoute.js";
import AdminRoute from "./routes/AdminRoute.js";

const app = express();
const port = 5555;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/alumni", AlumniRoute);
app.use("/news", NewsRoute);
app.use("/event", EventsRoute);
app.use("/story", SuccessStoryRoute);
app.use("/admin", AdminRoute);

app.get("/", (req, res) => {
  res.send("Hello,World!");
});

app.listen(port, () => {
  console.log("Server started successfully!");
  console.log(`http://localhost:${port}`);
});
