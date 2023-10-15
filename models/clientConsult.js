"use strict";
import connection from "../connection.js";

export const getAllConsultsFromDB = async () => {
  const conn = connection();

  const query = "SELECT * FROM clients_consults";

  const resGetConsults = await new Promise((resolve) => {
    conn.query(query, (err, results) => {
      if (err) {
        conn.end();
        resolve({ ok: 0, error: err.message });
      } else {
        conn.end();
        resolve({ ok: 1, data: results });
      }
    });
  });
  return resGetConsults;
};

export const newClientConsult = async ({
  username,
  email,
  phoneNumber,
  message,
}) => {
  try {
    const conn = connection();
    const query =
      "INSERT INTO clients_consults (username, email, phoneNumber, message) VALUES (?, ?, ?, ?)";

    const resNewConsult = await new Promise((resolve) => {
      conn.query(
        query,
        [username, email, phoneNumber, message],
        (err, results) => {
          if (err) {
            conn.end();
            resolve({ ok: 0, error: err.message });
          } else {
            conn.end();
            resolve({ ok: 1, data: results });
          }
        }
      );
    });

    if (resNewConsult.ok === 0) {
      return resNewConsult;
    }

    return { ok: 1, data: "Consulta creada correctamente" };
  } catch (error) {
    return { ok: 0, error: error.message };
  }
};
