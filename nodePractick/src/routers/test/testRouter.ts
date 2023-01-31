import { Router } from "express";

interface IAuth {
  getAllTests: () => {};
  getTestById: () => {};
  createTest: () => {};
  updateTest: () => {};
  deleteTest: () => {};
}

const contoller = require("../../controller/testController");
const wrappers = require("../../midlleware/wrappers");

const router = Router();

router.get("/", wrappers(contoller.getAllTests));
router.get("/:id", wrappers(contoller.getTestById));
router.post("/create", wrappers(contoller.createTest));
router.put("/:id", wrappers(contoller.updateTest));
router.delete("/:id", wrappers(contoller.deleteTest));

module.exports = router;
