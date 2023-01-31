import { Request, Response, NextFunction } from "express";
const services = require("../services/authServices");

interface IAuth {
  registration: () => {};
  login: () => {};
  getUser: () => {};
}

class AuthController<IAuth> {
  async registration(req: Request, res: Response) {
    const newUser = await services.registration(req.body);

    res.status(201).json(newUser);
  }
  async login(req: Request, res: Response) {
    const token = await services.login(req.body);
    res.status(200).json({ token });
  }
  async getUser(req: Request, res: Response) {
    await services.getUser();
    res.send("Worked");
  }
}

module.exports = new AuthController();
