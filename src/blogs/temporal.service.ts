import { Injectable } from '@nestjs/common';
import { BlogPost } from './interfaces/blog.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { Topic } from './interfaces/category.interface';
import { Admin } from './interfaces/admin.interface';
import { Types } from 'mongoose';
import { NativeConnection, Worker } from '@temporalio/worker';
import * as activities from './activities';
import { Connection, Client } from '@temporalio/client';
import { Blog } from './workflows';


@Injectable()
export class TemporalService {
  constructor(
    @InjectModel('Blog') private readonly blogModel: Model<BlogPost>,
   
  ) {}

  async findAll(): Promise<BlogPost[]> {
    return await this.blogModel.find();
  }

  async run() {
    
    const connection = await NativeConnection.connect({
      address: 'localhost:7233',
    });
    
    const worker = await Worker.create({
      connection,
      namespace: 'default',
      taskQueue: 'blog',
      workflowsPath: require.resolve('./workflows'),
      activities,
    });
  
    await worker.run();
  }

  async  runclient(blog) {
   
    const connection = await Connection.connect({ address: 'localhost:7233' });
  
    const client = new Client({
      connection,
    });
  
    const handle = await client.workflow.start(Blog, {
      taskQueue: 'blog',
     
      args: [blog],
      
      workflowId: 'workflow-' + Math.floor(Math.random() * 10),
    });
    console.log(`Started workflow ${handle.workflowId}`);
  
    console.log(await handle.result()); 

    return await handle.result()
  }
}
