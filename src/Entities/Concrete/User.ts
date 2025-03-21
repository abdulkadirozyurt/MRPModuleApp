import mongoose, { Schema } from "mongoose";
import IUser from "../Abstract/IUser";
import { UserRoles } from "../../Utilities/Enums/User/UserRoles";

const UserSchema = new Schema<IUser>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    department: { type: String },
    position: { type: String },
    address: { type: String },
    phoneNumber: {
      type: String,
      // unique: true,
      sparse: true,
      required: false,
      default: null,
    },
    employeeCode: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: UserRoles,
      required: true,
      default: "viewer",
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", UserSchema);
