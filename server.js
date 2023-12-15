import express from "express";
const app = express();
import { configDotenv } from "dotenv";
configDotenv();

const port = process.env.PORT || 6000;

// * MiddleWare

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello");
});

//* Routes File
import router from "./routes/index.js";
app.use(router);

//Server is ruunning on this port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
