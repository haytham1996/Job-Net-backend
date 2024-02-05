import mongoose, { Schema } from "mongoose";
import { applicationStatus } from "../constants/Enum";

const applicationSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: [
      applicationStatus.ACCEPTED,
      applicationStatus.PENDING,
      applicationStatus.REJECTED,
    ],
    default: applicationStatus.PENDING,
  },
  university: {
    type: String,
    required: true,
  },

  level: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Application", applicationSchema);
