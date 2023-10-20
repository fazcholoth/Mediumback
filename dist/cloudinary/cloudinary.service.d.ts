/// <reference types="multer" />
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
export declare class CloudinaryService {
    uploadImage(fileName: Express.Multer.File): Promise<UploadApiResponse | UploadApiErrorResponse>;
}
