"use strict";
import express from "express";
import cors from "cors";
import { getConsults, createClientConsult } from "./controllers/consults.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", getConsults);

app.post("/", createClientConsult);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server started");
});
