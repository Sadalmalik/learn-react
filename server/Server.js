import express from "express";
import LoadData from "./DataLoader.js";
import GetStaticDirectory from "./StaticDirectory.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(GetStaticDirectory("/../dist")));

app.get("/api/refresh", async (req, res) => {
  console.log(`Handle request '${req.url}' from ${req.headers}`);
  serverState.data = await LoadData();
  res.status(200).json({ status: "success" });
});

app.get("/api/getdata", async (req, res) => {
  serverState.data.accessCount += 1;
  console.log(`Handle request '${req.url}' from ${req.headers}`);
  try {
    res.status(200).json(serverState.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.get("/api/stop", async (req, res) => {
  console.log(`Handle request '${req.url}' from ${req.headers}`);
  setTimeout(() => {
    console.log(`Close servevr`);
    server.close();
  }, 100);
  res.status(200).json({ status: "success" });
});

const serverState = { data: null };

let server = app.listen(PORT, async () => {
  serverState.data = await LoadData();
  serverState.data.accessCount = 0;

  console.log(`Server is running!`);
  console.log(`Available links:`);
  console.log(`\thttp://127.0.0.1:${PORT}/`);
  console.log(`\thttp://127.0.0.1:${PORT}/api/test`);
  console.log(`\thttp://127.0.0.1:${PORT}/api/close`);
});
