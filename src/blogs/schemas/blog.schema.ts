import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  heading: String,
  creator:String,
  topic: String,
  image: String,
  creatorimg: String,
  content:Object,
  readTime: Number,
});
