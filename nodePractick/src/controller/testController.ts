import { Request, Response } from "express";
const service = require("../services/testService");

interface IShema {
  userName: string;
  email: string;
  nickName?: string;
}

class ControllerTest {
  async getAllTests(req: Request, res: Response) {
    const tests = await service.getAllTests();
    res.status(200).json(tests);
  }
  async getTestById(req: Request, res: Response) {
    const testByid = await service.getTestById(req.params.id);
    res.send(testByid);
  }
  async createTest(req: Request, res: Response) {
    const newTest = await service.createTest(req.body);
    res.status(201).json(newTest);
  }
  async updateTest(req: Request, res: Response) {
    const updateTests = await service.updateTest(req.params.id, req.body);
    res.status(200).json(updateTests);
  }
  async deleteTest(req: Request, res: Response) {
    await service.deleteTest(req.params.id);
    res.status(200).json({ message: "Succsses" });
  }
}

module.exports = new ControllerTest();
