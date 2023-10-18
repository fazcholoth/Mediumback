import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { BlogService } from './blogs.service';
import { BlogSchema } from './schemas/blog.schema';
import { TopicSchema } from './schemas/topic.schema';
import { UserSchema } from './schemas/user.schema';
import { AdminSchema } from './schemas/admin.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Blog', schema: BlogSchema },{ name: 'User', schema: UserSchema },{ name: 'Admin', schema: AdminSchema },{ name: 'Topic', schema: TopicSchema }])],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
