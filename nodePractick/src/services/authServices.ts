const Role = require("../model/authModel/Role");
const User = require("../model/authModel/User");
const bcrypt = require("bcryptjs");

const getToken = require("../helpers/createToken");

interface IUser {
  username: string;
  password: string;
  role?: ["USER", "ADMIN"];
}

class AuthServices {
  async registration(body: IUser) {
    try {
      const candidate = await User.findOne({ username: body.username });
      if (candidate) {
        throw new Error("Errors! User wiht this name already created!");
      }

      const hashPassword = bcrypt.hashSync(body.password, 7);

      const userRole = await Role.findOne({ value: "USER" });

      return await User.create({
        username: body.username,
        password: hashPassword,
        roles: [userRole.value],
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  // ==========================
  async login(body: IUser) {
    try {
      const user = await User.findOne({ username: body.username });
      if (!user) {
        throw new Error();
      }
      const checkPassword = bcrypt.compareSync(body.password, user.password);
      if (!checkPassword) {
        throw new Error();
      }

      return getToken(user._id, user.roles);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  // ================================

  async getUser() {
    try {
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

module.exports = new AuthServices();
