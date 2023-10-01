import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fbConnect from "./firebaseConn.js";

//Define express,express.json and cors/ all are needed for developmet
const app = express();
app.use(express.json());
app.use(cors());

app.post("/products", bodyParser.json(), (req, res) => {
  res.json();
});
app.post("/systems", bodyParser.json(), (req, res) => {
  console.log(req.body);
  res.json();
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

fbConnect();
