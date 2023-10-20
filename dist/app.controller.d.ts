/// <reference types="multer" />
import { AppService } from './app.service';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    private cloudinayService;
    constructor(appService: AppService, cloudinayService: CloudinaryService);
    getHello(): string;
    uploadToCloudinary(file: Express.Multer.File, res: Response): Promise<{
        statusCode: number;
        message: any;
    }>;
}
