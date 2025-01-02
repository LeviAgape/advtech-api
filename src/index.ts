import express from "express";
import { config } from "dotenv";

config();
const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`listening on ports ${port}!`));

app.get("/", (req, res) => {
  res.send("teeste rota");
});
