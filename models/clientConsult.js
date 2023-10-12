"use strict";
import connection from "../connection.js";

export const newClientConsult = async ({
  name,
  email,
  phoneNumber,
  message,
}) => {
  try {
    const conn = connection();
    const query =
      "INSERT INTO clientConsult (name, email, phoneNumber, message) VALUES (?, ?, ?, ?)";

    const resNewConsult = await new Promise((resolve) => {
      conn.query(query, [name, email, phoneNumber, message], (err, results) => {
        if (err) {
          conn.end();
          return { ok: 0, error: err.message };
        } else {
          conn.end();
          return { ok: 1, data: results.data };
        }
      });
    });
  } catch (error) {
    return { ok: 0, error: error.message };
  }
};
