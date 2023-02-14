import mongoose from "mongoose";

const Comentary = mongoose.Schema({
  name: {
    type: String,
  },
  comment: {
    type: String,
  },
});

const News = mongoose.Schema({
  headline: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  author: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: [String],
  },
  category: {
    type: String,
  },
  source: {
    type: String,
  },
  comments: [Comentary],
});

export default mongoose.model("news", News);
