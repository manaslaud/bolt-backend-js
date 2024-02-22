import mongoose, { Document } from 'mongoose';

interface StrokeType extends Document {
  strokeColor: string;
  positionArray: Array<[number, number]>
  strokeSize: number;
  startTime: number;
  endTime: number;
}

export interface StrokeSessionType extends StrokeType{
  session_name: string;
  data: StrokeType[]
}

const StrokeSchema = new mongoose.Schema<StrokeType>({
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

export const StrokeSessionSchema = new mongoose.Schema<StrokeSessionType>({
  session_name: {
    type: String,
    required: true,
  },
  data: {
    type: [StrokeSchema],
    required: true,
  },
});