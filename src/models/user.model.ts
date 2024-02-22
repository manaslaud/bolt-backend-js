import mongoose, { Document, Schema } from 'mongoose';
import { StrokeType } from './stroke.model.js';

export interface UserType extends Document {
    _id: Schema.Types.ObjectId;
    username: string;
    passwordHash: string;
    recording: Array<StrokeType>
}

const userSchema = new mongoose.Schema<UserType>({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    recording: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Recording' }],
    }
});

const User = mongoose.model<UserType>('User', userSchema);

export default User;