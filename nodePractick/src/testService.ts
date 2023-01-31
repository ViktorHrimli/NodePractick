const { Test } = require("./model/testModel");

interface IShema {
  userName: string;
  email: string;
  nickName?: string;
}

class ServiceTest {
  async getAllTests() {
    return await Test.find({});
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
