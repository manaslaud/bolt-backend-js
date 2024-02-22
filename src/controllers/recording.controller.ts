import { Request, Response } from "express";
import catchAsync from "../helpers/catchAsync.js";
import User from "../models/user.model.js";

export const uploadController = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.body.decoded;
        const { recording } = req.body;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        user.recording.push(recording);

        await user.save();

        return res.status(200).json({ message: 'Recording successfully updated!' });
    })

export const getRecordingController = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.body.decoded;
        const user = await User.findById(id).populate('recording');
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        return res.status(200).json({ recording: user.recording });
    })
