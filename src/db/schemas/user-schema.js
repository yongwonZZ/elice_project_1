import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"], // 관리자랑 구별 짓기 위함
      required: false,
      default: "user",
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

export { UserSchema };
