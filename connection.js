"use strict";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connection = () => {
  if (process.env.PRODUCTION === "true") {
    const conn = mysql.createConnection({
      host: process.env.PRODUCTION_DB_HOST,
      user: process.env.PRODUCTION_DB_USER,
      password: process.env.PRODUCTION_DB_PASSWORD,
      database: process.env.PRODUCTION_DB_DATABASE,
      port: process.env.PRODUCTION_DB_PORT,
    });
    return conn;
  } else {
    const conn = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });
    return conn;
  }
};

export default connection;
