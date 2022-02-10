import { Sequelize, Options } from "sequelize";
console.log("initializing sequelize");

require("dotenv").config();

const db = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  userName: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
if (process.env.STAGE === "local") {
  db.host = process.env.DB_HOST || "localhost";
  db.port = process.env.DB_PORT || "3306";
  db.userName = process.env.DB_USER || "root";
  db.password = process.env.DB_PASSWORD || "admin123";
  db.database = process.env.DB_NAME || "serverless";
}

const dbConnection: Options = {
  dialect: "mysql",
  host: db.host,
  port: parseInt(db.port, 10),
  username: db.userName,
  password: db.password,
  database: db.database,
  pool: {
    max: 5,
    min: 0,
  },
  dialectOptions: {
    connectTimeout: 60000,
  },
};

export const sequelize = new Sequelize(dbConnection);
