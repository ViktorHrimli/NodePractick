import { Schema, model } from "mongoose";

interface IShema {
  userName: string;
  email: string;
  nickName?: string;
}

const testShema = new Schema<IShema>(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    nickName: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Test = model("Test", testShema);

module.exports = { Test };
