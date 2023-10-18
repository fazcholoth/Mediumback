import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogController} from './blogs/blog.controller';
import { BlogService } from './blogs/blogs.service';
import { BlogModule } from './blogs/blogs.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import config from './config/keys';



@Module({
  imports: [BlogModule, MongooseModule.forRoot(config.mongoURI), CloudinaryModule],
  controllers: [AppController, BlogController],
  providers: [AppService, BlogService],
})
export class AppModule {}
