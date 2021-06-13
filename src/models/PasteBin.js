import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pasteBinSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
  expiredAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const PasteBin = mongoose.model("PasteBin", pasteBinSchema);
