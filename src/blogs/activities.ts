import { Injectable } from '@nestjs/common';
import { BlogPost } from './interfaces/blog.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { Topic } from './interfaces/category.interface';
import { Admin } from './interfaces/admin.interface';
import { Types } from 'mongoose';
import { BlogService } from './blogs.service';
import * as mongoose from 'mongoose';

import ms from 'ms'


const Url = 'mongodb+srv://fazil:fazil123@cluster0.eto1yee.mongodb.net/test?retryWrites=true&w=majority'
const connection = async()=>{
    try {
        await  mongoose.connect(Url)
        console.log('database connected');
    } catch (error) {
        console.log(error);
    }
}

 const BlogSchema = new mongoose.Schema(
  {
    heading: String,
    creator: String,
    topic: String,
    image: String,
    creatorimg: String,
    content: Object,
    readTime: Number,
  },
  { timestamps: true }
);

const TopicSchema = new mongoose.Schema({
  name: String,
  listed: Boolean,
});

const AdminSchema = new mongoose.Schema({
  email:String,
  password:String,
});
 const UserSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  image:String,
});



 

const blogModel = mongoose.model('Blog', BlogSchema)
const userModel = mongoose.model('User', UserSchema)
const adminModel = mongoose.model('Admin', AdminSchema)
const topicModel = mongoose.model('Topic', TopicSchema)


// const blogModel: Model<BlogPost> =  mongoose.model('Blog', BlogSchema)
// const userModel: Model<User> = mongoose.model('User', UserSchema)
// const adminModel: Model<Admin> = mongoose.model('Admin', AdminSchema)
// const topicModel: Model<Topic> = mongoose.model('Topic', TopicSchema)

// const blogService = new BlogService( blogModel,userModel,adminModel,topicModel)


export async function postBlog(blog): Promise<any> {
 

  connection()

  

  const neBlog = new blogModel(blog);

  return await neBlog.save();

}