import { Router } from "express";
interface IAuth {
  registration: () => {};
  login: () => {};
  getUser: () => {};
}

const ctr: IAuth = require("../../controller/authController");

const router = Router();

router.post("/registration", ctr.registration);
router.post("/login", ctr.login);
router.get("/user", ctr.getUser);

module.exports = router;
