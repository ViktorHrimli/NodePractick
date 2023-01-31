import { Router } from "express";
const contoller = require("./testController");

const router = Router();

router.get("/", contoller.getAllTests);
router.get("/:id", contoller.getTestById);
router.post("/create", contoller.createTest);
router.put("/:id", contoller.updateTest);
router.delete("/:id", contoller.deleteTest);

module.exports = router;
