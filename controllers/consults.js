"use strict";
import {
  getAllConsultsFromDB,
  newClientConsult,
} from "../models/clientConsult.js";

export const getConsults = async (req, res) => {
  try {
    const getClientsConsults = await getAllConsultsFromDB();

    res.status(200).json(getClientsConsults);
  } catch (error) {
    res.status(500).json({ ok: 0, error: error.message });
  }
};
export const createClientConsult = async (req, res) => {
  try {
    const { username, email, phoneNumber, message } = req.body;
    const clientConsult = await newClientConsult({
      username,
      email,
      phoneNumber,
      message,
    });

    res.status(201).json(clientConsult);
  } catch (error) {
    res.status(500).json({ ok: 0, error: error.message });
  }
};
