import { AppService } from './app.service';
import {
  Controller,
  Post,
  Get,
  UploadedFile,
  UseInterceptors,
  Res
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService ,private cloudinayService : CloudinaryService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload-image')
  @UseInterceptors(FileInterceptor('file'))
  async uploadToCloudinary(@UploadedFile() file: Express.Multer.File ,@Res() res: Response) {
    try {
      const data = await this.cloudinayService.uploadImage(file);
      console.log('uploading and waiting');
      
      // return {
      //   success: 1,
      //   data: data.url,
      // };
      res.json(
        {
          success: 1,
          file:{
            url:data.url,
          } 
        }
      );
    } catch (err) {
      return {
        statusCode: 400,
        message: err.message,
      };
    }
  }

  
}
