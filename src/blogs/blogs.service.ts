import { Injectable } from '@nestjs/common';
import { BlogPost } from './interfaces/blog.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { Topic } from './interfaces/category.interface';
import { Admin } from './interfaces/admin.interface';
import { Types } from 'mongoose';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Blog') private readonly blogModel: Model<BlogPost>,
  @InjectModel('User') private readonly userModel: Model<User>,
  @InjectModel('Admin') private readonly adminModel: Model<Admin>,
  @InjectModel('Topic') private readonly topicModel: Model<Topic>,) {}

  async findAll(): Promise<BlogPost[]> {
    
    return await this.blogModel.find();
  }

  async findAllwriters(): Promise<User[]> {
    
    return await this.userModel.find();
  }


  async findAllTopics(): Promise<Topic[]> {

    return await this.topicModel.find()
  }

  async findTopwriters(): Promise<User[]> {
    
    return await this.userModel.find().limit(3);
  }

  async findRecommented(): Promise<Topic[]> {

    return await this.topicModel.find().limit(10);
  }

  async findFeatured(): Promise<BlogPost[]> {
    
    return await this.blogModel.find().limit(3)
  }

  async findTopicwise(id: string): Promise<BlogPost[]> {
    
    return await this.blogModel.find()
  }

  async findOne(id: string): Promise<BlogPost> {
    
    return await this.blogModel.findOne({ _id: id});
  }

  async create(blog: BlogPost): Promise<BlogPost> {
    console.log("creating blog");
    
    const newBlog = new this.blogModel(blog);
    return await newBlog.save();
  }


  async loginUser(user: User): Promise<User> {
    
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async loginAdmin(admin: Admin): Promise<Admin> {
    
    const newAdmin = new this.adminModel(admin);
    return await newAdmin.save();
  }

  async delete(id: string): Promise<BlogPost> {
    
    return await this.blogModel.findByIdAndRemove(id);
  }

  async deleteTopic(id: string): Promise<Topic> {
    
    return await this.topicModel.findByIdAndRemove(id);
  }
  

  async blockUser(id: string): Promise<User> {
    const userId = Types.ObjectId(id);
      
      return await this.userModel.findByIdAndUpdate(userId, { blocked: true }, { new: true });
      
  }

  async unblockUser(id: string): Promise<User> {
    const userId = Types.ObjectId(id); 
    return await this.userModel.findByIdAndUpdate(userId, { blocked: false }, { new: true })
  }

  async unlistTopic(id: string): Promise<Topic> { 
    
    return await this.topicModel.findByIdAndUpdate(id,{listed : false}, { new: true });
  }

  async listTopic(id: string): Promise<Topic> {
    
    return await this.topicModel.findByIdAndUpdate(id,{listed: true}, { new: true });
  }
  async addTopic(topic: Topic): Promise<Topic> {
    
    const newTopic = new this.topicModel(topic);
    return await newTopic.save();
  }
}
