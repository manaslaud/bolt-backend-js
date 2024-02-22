import mongoose, { Document } from 'mongoose';

export interface StrokeType extends Document {
  stroke: string;
  color: string;
  data: Array<[number, number]>
  size: number;
  startTime: number;
  endTime: number;
}

export const RecordingSchema = new mongoose.Schema<StrokeType>({
  data: {
    type: [[Number]],
    required: true,
  },
  color: {
    type: String,
    default: "Black",
  },
  size: {
    type: Number,
    default: 10,
  },
  stroke: {
    type: String,
    default: "10",
  },
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  }
});
