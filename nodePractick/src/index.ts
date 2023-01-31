import express, { Express, Request, Response, NextFunction } from "express";
const moragan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app: Express = express();

const formatLog = app.get("env") === "development" ? "dev" : "short";

app.use(cors());
app.use(moragan(formatLog));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Worked" });
});

module.exports = app;
