import { Request, Response } from "express";
import catchAsync from "../helpers/catchAsync.js";

export const sampleController = catchAsync(
    async (_req: Request, res: Response) => {
        return res.status(200).json({ message: 'Hello World!' });
    })