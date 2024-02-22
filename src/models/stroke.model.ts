import mongoose, { Document } from 'mongoose';

export interface StrokeType extends Document {
  strokeColor: string;
  positionArray: Array<[number, number]>
  strokeSize: number;
  startTime: number;
  endTime: number;
}

export const StrokeSchema = new mongoose.Schema<StrokeType>({
  strokeColor: {
    type: String,
    required: true,
  },
  positionArray: {
    type: [[Number]],
    required: true,
  },
  strokeSize: {
    type: Number,
    required: true,
  },
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  },
});