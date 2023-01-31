import express, { Express, Request, Response, NextFunction } from "express";
const moragan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const testRouter = require("./routers/test/testRouter");
const authRouter = require("./routers/auth/authRouter");

const app: Express = express();

const formatLog = app.get("env") === "development" ? "dev" : "short";

app.use(cors());
app.use(moragan("dev"));
app.use(express.json());

app.use("/test", testRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found", status: "Faild" });
});

app.use((req, res, next) => {
  res.status(500).json({ message: "Server ERROR", status: "Faild" });
});

module.exports = app;
