import mongoose, { Schema } from "mongoose";

const publicationSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },

  description: {
    type: String,
    required: true,
  },

  image: String,
});

export default mongoose.model("Post", publicationSchema);
