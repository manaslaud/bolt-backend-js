import mongoose, { Document, Schema } from 'mongoose';
import { StrokeSchema, StrokeType } from './stroke.model.js';

export interface UserType extends Document {
    _id: Schema.Types.ObjectId;
    username: string;
    passwordHash: string;
    recording: StrokeType[][]
    isTeacher: boolean;
    name: string;
    email: string;
    institution_name: string
}

const userSchema = new mongoose.Schema<UserType>({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    recording: {
        type: [[StrokeSchema]],
        default:[]
    },
    isTeacher: { type: Boolean, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    institution_name: { type: String, required: true }
});

const User = mongoose.model<UserType>('User', userSchema);

export default User;