
import * as mongoose from 'mongoose';

export const AdminSchema = new mongoose.Schema({
    email:String,
    password:String,
});