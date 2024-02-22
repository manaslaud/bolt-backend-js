import { Request, Response } from "express";
import catchAsync from "../helpers/catchAsync.js";
import User from "../models/user.model.js";

export const uploadController = catchAsync(
    async (req: Request, res: Response) => {
        const { userID } = req.body.decoded;
        const { recording, session_name } = req.body;
        const user = await User.findById(userID);
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
       
        user.recording.push({data: recording, session_name} as any);
        await user.save();

        return res.status(200).json({ message: 'Recording successfully updated!' });
    })

export const getRecordingController = catchAsync(
    async (req: Request, res: Response) => {
        const { userID } = req.body.decoded;
        const session_name = req.query.session_name as string;
        const user = await User.findById(userID).populate('recording');
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        if (session_name) {
            const recording = user.recording.find((rec) => rec.session_name === session_name);
            if (!recording) {
                return res.status(404).json({ error: "Recording not found" });
            }
            return res.status(200).json({ recording });
        }
        return res.status(200).json({ recording: user.recording });
    })
