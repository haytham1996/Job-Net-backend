import mongoose, { Schema } from "mongoose";
import { userRole } from "../constants/Enum";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [userRole.ADMIN, userRole.EMPLOYEE, userRole.EMPLOYEE],
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
