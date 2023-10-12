"use strict";
import { newClientConsult } from "../models/clientConsult.js";

export const createClientConsult = async (req, res) => {
  try {
    const { name, email, phoneNumber, message } = req.body;
    const clientConsult = await newClientConsult({
      name,
      email,
      phoneNumber,
      message,
    });

    console.log(clientConsult);

    res.status(201).json({ ok: 1, data: clientConsult });
  } catch (error) {
    res.status(500).json({ ok: 0, error: error.message });
  }
};
