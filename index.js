"use strict";
import express from "express";
import cors from "cors";
import { createClientConsult } from "./controllers/consults.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", createClientConsult);

app.listen(3000, () => {
  console.log("Server started");
});
