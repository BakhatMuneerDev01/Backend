import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';

const uploadToCloudinary = async (localFilePath) => {
    if (!localFilePath) return true;

    try {
        const uploadResult = await cloudinary.uploader.upload(localFilePath);
        console.log('File successfully uploaded to Cloudinary', uploadResult.url);
        await fs.unlink(localFilePath);
    } catch (error) {
        console.error('Failed uploading file to Cloudinary', error);
        try {
            await fs.unlink(localFilePath);
        } catch (unlinkError) {
            console.error('Failed to delete local file', unlinkError);
        }
    }
};

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

export default uploadToCloudinary;