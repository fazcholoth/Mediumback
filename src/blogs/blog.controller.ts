import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Res
} from '@nestjs/common';
import { CreateBlogPostDto } from './dto/blogs.dto';
import { BlogService} from './blogs.service';
import { BlogPost } from './interfaces/blog.interface';
import { Topic } from './interfaces/category.interface';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/user.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { Admin } from './interfaces/admin.interface';
import { CreateTopicDto } from './dto/category.dto';
import { Response } from 'express';


@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll(): Promise<BlogPost[]> {
    return this.blogService.findAll();
  }
  
  @Get('counts')
  findCounts(): Promise<any> {
    return this.blogService.findCounts();
  }
  

  @Get('allusers')
  findAllwriters (): Promise<User[]> {
    return this.blogService.findAllwriters();
  }

  @Get('alltopics')
  findAllTopics(): Promise<Topic[]> {
    return this.blogService.findAllTopics();
  }

  @Get('cats')
  findcats(): Promise<Topic[]> {
    return this.blogService.findcats();
  }

  @Get('topwriters')
  findTopWriters (): Promise<User[]> {
    return this.blogService.findTopwriters();
  }

  @Get('featured')
  findFeatured(): Promise<BlogPost[]> {
    return this.blogService.findFeatured();
  }

  @Get('recommented')
  findRecommented(): Promise<Topic[]> {
    return this.blogService.findRecommented();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<BlogPost> {
    return this.blogService.findOne(id);
  }

  @Get('topicwise/:id')
  findTopicwise(@Param('id') id): Promise<BlogPost[]> {
    return this.blogService.findTopicwise(id);
  }

  @Post()
  create(@Body() createBlogDto: CreateBlogPostDto): Promise<BlogPost> {
    return this.blogService.create(createBlogDto);
  }

  @Post('loginuser')
  loginUser(@Body() CreateUserDto) : Promise<User> {
    return this.blogService.loginUser(CreateUserDto);
  }

  @Post('loginadmin')
  loginAdmin(@Body() CreateAdminDto: CreateUserDto): Promise<Admin> {
    return this.blogService.loginAdmin(CreateAdminDto);
  }

  @Delete('deletepost/:id')
  delete(@Param('id') id): Promise<BlogPost> {
    return this.blogService.delete(id);
  }

  // @Delete('deletetopic/:id')
  // deleteTopic(@Param('id') id): Promise<Topic> {
  //   return this.blogService.deleteTopic(id);
  // }

  @Put('blockuser/:id')
  blockuser(@Param('id') id): Promise<User> {
    return this.blogService.blockUser(id);
  }

  @Put('unblockuser/:id')
  unblockuser(@Param('id') id): Promise<User> {
    return this.blogService.unblockUser(id);
  }

  @Put('unlisttopic/:id')
  unlisttopic(@Param('id') id): Promise<Topic> {
    return this.blogService.unlistTopic(id);
  }

  @Put('listtopic/:id')
  listtopic(@Param('id') id): Promise<Topic> {
    return this.blogService.listTopic(id);
  }

  @Post('addtopic')
  addTopic(@Body() CreateTopicDto: CreateTopicDto): Promise<Topic> {
    return this.blogService.addTopic(CreateTopicDto);
  }
}
