const { Test } = require("../model/testModel/testModel");

interface IShema {
  userName: string;
  email: string;
  nickName?: string;
}

class ServiceTest {
  async getAllTests() {
    try {
      return await Test.find({});
    } catch (error) {}
  }
  async getTestById(id: string) {
    return await Test.findById(id);
  }
  async createTest(body: IShema) {
    return await Test.create(body);
  }
  async updateTest(id: string, body: IShema) {
    return await Test.findByIdAndUpdate(id, body);
  }
  async deleteTest(id: string) {
    return await Test.findByIdAndDelete(id);
  }
}

module.exports = new ServiceTest();
