import { Request, Response, NextFunction } from "express";

const wrappers = (controller: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = wrappers;
