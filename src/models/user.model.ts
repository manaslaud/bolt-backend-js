import mongoose, { Document, Schema } from 'mongoose';
import { StrokeType } from './stroke.model.js';

export interface UserType extends Document {
    _id: Schema.Types.ObjectId;
    username: string;
    passwordHash: string;
    recording: Array<StrokeType>
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
        type: [{ type: Schema.Types.ObjectId, ref: 'Recording' }],
    },
    isTeacher: { type: Boolean, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    institution_name: { type: String, required: true }
});

const User = mongoose.model<UserType>('User', userSchema);

export default User;