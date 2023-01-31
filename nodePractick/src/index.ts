import express, { Express, Request, Response, NextFunction } from "express";
const moragan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const router = require("./router");

const app: Express = express();

const formatLog = app.get("env") === "development" ? "dev" : "short";

app.use(cors());
app.use(moragan("dev"));
app.use(express.json());

app.use("/test", router);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found", status: "Faild" });
});

app.use((req, res, next) => {
  res.status(500).json({ message: "Server ERROR", status: "Faild" });
});

module.exports = app;
